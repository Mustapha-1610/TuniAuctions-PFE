import bidderModel from "../models/bidderModel";
import express from "express";
import { AuctionListingType } from "../types/auctionListing";
import { IBidder } from "../types/bidderTypes";
import auctionListingModel from "../models/auctionListingModel";
import { bidderNameSpace } from "../server";
import { adminRoomNameSpace } from "../server";
import { sellerNameSapce } from "../server";
import { io } from "socket.io-client";
import { premiumListingInfos } from "./zodSchema/auctionListingSchema";
import { returnSellerFrontData } from "../helpers/returnSellerFrontData";
import moment from "moment";
import nodeSchedule from "node-schedule";
import sellerModel from "../models/sellerModel";
import { ISeller } from "../types/sellerTypes";
import adminModel from "../models/adminModel";

export async function basic(req: express.Request, response: express.Response) {
  try {
    const { updatedAuctionListingForm, sellerId, type }: premiumListingInfos =
      req.body;
    const seller: ISeller = await sellerModel.findById(sellerId);
    if (seller && seller.packageCount[type] > 0) {
      const newAuction = await auctionListingModel.create({
        listingType: type,
        title: updatedAuctionListingForm.title,
        description: updatedAuctionListingForm.description,
        category: updatedAuctionListingForm.productCategory,
        promotionalVideo: updatedAuctionListingForm.promotionalVideo,
        productPictures: updatedAuctionListingForm.productPictures.reverse(),
        originalPrice: updatedAuctionListingForm.originalPrice,
        startingDate: updatedAuctionListingForm.startingDate,
        platformFees: type === "Basic" ? 8 : type === "Standard" ? 6.5 : 4,
        openingBid: updatedAuctionListingForm.openingBid,
        guarantee:
          updatedAuctionListingForm.guarentee.length +
          " " +
          updatedAuctionListingForm.guarentee.period,
        featured: type === "Premium",
        minParticipatingBidders:
          updatedAuctionListingForm.minParticipatingBidders,
        sellerId: seller._id,
        buyItNowSection:
          type !== "Basic" && updatedAuctionListingForm.buyItNowSection,
        socialsSection:
          type === "Premium" && updatedAuctionListingForm.socialsSection,
      });
      seller.createdAuctions.upcoming.push(newAuction._id);
      if (type !== "Basic") {
        seller.packageCount[type] -= 1;
        await seller.save();
      }
      const scheduleResponse = await scheduleAuctionStart(newAuction);
      if (scheduleResponse) {
        await seller.save();
        const sellerFrontData = returnSellerFrontData(seller);
        return response.json({ success: true, sellerFrontData });
      } else {
        console.log(scheduleResponse + "Schedule response");
        return response.json({ success: false });
      }
    } else {
      return response.json({ success: false });
    }
  } catch (err) {
    console.log(err);
    return response.json({ serverError: true });
  }
}

export async function scheduleAuctionStart(newAuction: AuctionListingType) {
  try {
    if (newAuction) {
      nodeSchedule.scheduleJob(newAuction.startingDate, async () => {
        const resfreshedAuction: AuctionListingType =
          await auctionListingModel.findById(newAuction._id);
        if (
          resfreshedAuction.participatingBidders.length <
          resfreshedAuction.minParticipatingBidders
        ) {
          await handleReSchedule(resfreshedAuction);
        } else {
          await handleStart(resfreshedAuction);
        }
      });
      return true;
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function handleReSchedule(auctionlisting: AuctionListingType) {
  {
    if (
      auctionlisting.participatingBidders.length >
      auctionlisting.minParticipatingBidders * 0.7
    ) {
      const newStartingDate = new Date(
        auctionlisting.startingDate.getTime() + 3 * 24 * 60 * 60 * 1000
      );
      auctionlisting.startingDate = newStartingDate;
      await auctionlisting.save();
      auctionlisting.participatingBidders.map(async (value) => {
        const bidder = await bidderModel.findByIdAndUpdate(value.bidderId, {
          $push: {
            notifications: {
              notificationMessage: "auctionDelayed",
              context: {
                receptionDate: new Date(),
                frontContext: "auctionDelayed",
                contextId: auctionlisting._id,
                notificationIcon: auctionlisting.productPictures[0],
                displayName: moment(newStartingDate).format(
                  "ddd, MMM D, YYYY [at] h:mm A"
                ),
              },
            },
          },
        });
        const seller: ISeller = await sellerModel.findByIdAndUpdate(
          auctionlisting.sellerId,
          {
            $push: {
              notificationMessage: "auctionDelayed",
              context: {
                receptionDate: new Date(),
                frontContext: "auctionDelayed",
                notificationIcon: auctionlisting.productPictures[0],
                displayName: moment(newStartingDate).format(
                  "ddd, MMM D, YYYY [at] h:mm A"
                ),
              },
            },
          }
        );
        await adminModel.findOneAndUpdate(
          {},
          {
            $push: {
              notifications: {
                notificationMessage: "auctionDelay",
                context: {
                  receptionDate: new Date(),
                  frontContext: "auctionDelay",
                  contextId: auctionlisting._id,
                  notificationIcon: auctionlisting.productPictures[0],
                  displayName: auctionlisting.title,
                },
                readStatus: false,
              },
            },
          }
        );
        bidderNameSpace.emit("refreshData", {
          bidderSocketId: bidder.socketId,
        });
        sellerNameSapce.emit("refreshData", {
          sellerSocketId: seller.socketId,
        });
        adminRoomNameSpace.emit("refreshData");
      });
      scheduleAuctionStart(auctionlisting);
    } else {
      const newStartingDate = new Date(
        auctionlisting.startingDate.getTime() + 7 * 24 * 60 * 60 * 1000
      );
      auctionlisting.startingDate = newStartingDate;
      await auctionlisting.save();
      auctionlisting.participatingBidders.map(async (value) => {
        console.log(auctionlisting.participatingBidders + "Participating");
        const bidder = await bidderModel.findByIdAndUpdate(value.bidderId, {
          $push: {
            notifications: {
              notificationMessage: "auctionDelayed",
              context: {
                receptionDate: new Date(),
                frontContext: "auctionDelayed",
                contextId: auctionlisting._id,
                notificationIcon: auctionlisting.productPictures[0],
                displayName: moment(newStartingDate).format(
                  "ddd, MMM D, YYYY [at] h:mm A"
                ),
              },
            },
          },
        });
        await sellerModel.findByIdAndUpdate(auctionlisting.sellerId, {
          $push: {
            notificationMessage: "auctionDelayed",
            context: {
              receptionDate: new Date(),
              frontContext: "auctionDelayed",
              notificationIcon: auctionlisting.productPictures[0],
              displayName: moment(newStartingDate).format(
                "ddd, MMM D, YYYY [at] h:mm A"
              ),
            },
          },
        });
        bidderNameSpace.emit("refreshData", {
          bidderSocketId: bidder.socketId,
        });
      });
      scheduleAuctionStart(auctionlisting);
    }
  }
}

async function handleStart(auctionlisting: AuctionListingType) {
  auctionlisting.status = "Ongoing";
  await auctionlisting.save();
  const auctionRoomSocket = io(`${process.env.SOCKET_SERVER}/auctionRoom`);
  const data = {
    auctionId: auctionlisting._id,
    startingBid: auctionlisting.openingBid,
  };
  auctionRoomSocket.emit("startRoom", data);
  auctionlisting.participatingBidders.map(async (value) => {
    const bidder: IBidder = await bidderModel.findByIdAndUpdate(
      value.bidderId,
      {
        $push: {
          notifications: {
            notificationMessage: "auctionStart",
            context: {
              receptionDate: new Date(),
              frontContext: "auctionStart",
              contextId: auctionlisting._id,
              notificationIcon: auctionlisting.productPictures[0],
              displayName: auctionlisting.title,
            },
          },
        },
        $inc: {
          "balance.activeBalance": value.lockedBalance,
          "balance.lockedBalance": -value.lockedBalance,
        },
      }
    );
    bidderNameSpace.emit("refreshData", {
      bidderSocketId: bidder.socketId,
    });
  });
  const seller: ISeller = await sellerModel.findByIdAndUpdate(
    auctionlisting.sellerId,
    {
      $push: {
        notifications: {
          notificationMessage: "auctionStart",
          context: {
            receptionDate: new Date(),
            frontContext: "auctionStart",
            contextId: auctionlisting._id,
            notificationIcon: auctionlisting.productPictures[0],
            displayName: auctionlisting.title,
          },
        },
      },
    }
  );
  await adminModel.findOneAndUpdate(
    {},
    {
      $push: {
        notifications: {
          notificationMessage: "auctionStart",
          context: {
            receptionDate: new Date(),
            frontContext: "auctionStart",
            contextId: auctionlisting._id,
            notificationIcon: auctionlisting.productPictures[0],
            displayName: auctionlisting.title,
          },
          readStatus: false,
        },
      },
    }
  );
  console.log("got here");
  const sellerSocket = io(`${process.env.SOCKET_SERVER}/seller`);

  const adminSocket = io(`${process.env.SOCKET_SERVER}/admin`);

  sellerSocket.emit("refreshData", seller.socketId);
  adminSocket.emit("refreshData");
}
