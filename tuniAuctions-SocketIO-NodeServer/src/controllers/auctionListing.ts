import bidderModel from "../models/bidderModel";
import express from "express";
import { AuctionListingType } from "../types/auctionListing";
import { IBidder } from "../types/bidderTypes";
import { ObjectId } from "mongoose";

import auctionListingModel from "../models/auctionListingModel";
import { bidderNameSpace } from "../server";
import { io } from "socket.io-client";
import { verifySellerTokens } from "../security/seller/apiProtection";
import {
  basicListingInfos,
  basicListingType,
  premiumListingInfos,
  premiumListingType,
  standardListingInfos,
} from "./zodSchema/auctionListingSchema";
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

export async function standard(
  req: express.Request,
  response: express.Response
) {
  try {
    const { updatedAuctionListingForm, sellerId }: standardListingInfos =
      req.body;
    const seller = await sellerModel.findById(sellerId);
    if (seller.packageCount.Standard > 0) {
      const newAuction = await auctionListingModel.create({
        listingType: "Standard",
        title: updatedAuctionListingForm.title,
        description: updatedAuctionListingForm.description,
        category: updatedAuctionListingForm.productCategory,
        promotionalVideo: updatedAuctionListingForm.promotionalVideo,
        productPictures: updatedAuctionListingForm.productPictures.reverse(),
        originalPrice: updatedAuctionListingForm.originalPrice,
        startingDate: updatedAuctionListingForm.startingDate,
        platformFees: 4,
        openingBid: updatedAuctionListingForm.openingBid,
        guarantee:
          updatedAuctionListingForm.guarentee.length +
          " " +
          updatedAuctionListingForm.guarentee.period,
        buyItNowSection: updatedAuctionListingForm.buyItNowSection,
        featured: true,
        minParticipatingBidders:
          updatedAuctionListingForm.minParticipatingBidders,
        sellerId: seller._id,
      });
      seller.createdAuctions.upcoming.push(newAuction._id);
      seller.packageCount.Standard -= 1;
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
      return response.json({ errMessage: "emptyPackage" });
    }
  } catch (err) {
    console.log(err);
    return response.json({ serverError: true });
  }
}

export async function premium(
  req: express.Request,
  response: express.Response
) {
  try {
    const res = await verifySellerTokens(req);
    if (res.isValid) {
      const seller = res.sellerAccount;

      if (seller.packageCount.Premium > 0) {
        const {
          title,
          buyItNowSection,
          guarentee,
          description,
          openingBid,
          originalPrice,
          productCategory,
          productPictures,
          promotionalVideo,
          socialsSection,
          startingDate,
          minParticipatingBidders,
        }: premiumListingType = req.body;
        const newAuction = await auctionListingModel.create({
          listingType: "Premium",
          title,
          description,
          category: productCategory,
          promotionalVideo,
          productPictures: productPictures.reverse(),
          originalPrice,
          startingDate,
          platformFees: 4,
          openingBid,
          guarantee: guarentee.length + " " + guarentee.period,
          buyItNowSection,
          socialsSection,
          featured: true,
          minParticipatingBidders,
          sellerId: seller._id,
        });
        seller.createdAuctions.upcoming.push(newAuction._id);
        seller.packageCount.Premium -= 1;
        await seller.save();
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
        return response.json({ errMessage: "emptyPackage" });
      }
    } else {
      return response.json({ authError: true });
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
  const adminSocket = io(`${process.env.SOCKET_SERVER}/admin`);

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
    await sellerModel.findByIdAndUpdate(auctionlisting.sellerId, {
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
    });
    bidderNameSpace.emit("refreshData", {
      bidderSocketId: bidder.socketId,
    });
  });
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
  adminSocket.emit("refreshData");
}
