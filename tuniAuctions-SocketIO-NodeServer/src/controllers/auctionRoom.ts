import bidderModel from "../models/bidderModel";
import express from "express";
import { AuctionListingType } from "../types/auctionListing";
import { IBidder } from "../types/bidderTypes";
import { ISeller } from "../types/sellerTypes";

import auctionListingModel from "../models/auctionListingModel";
import { bidderNameSpace } from "../server";
import { auctionRoomNameSpace } from "../server";
import { io } from "socket.io-client";
import sellerModel from "../models/sellerModel";
import deliveryModel from "../models/deliveryModel";
export async function start(req: express.Request, response: express.Response) {
  try {
    const { auctionId } = req.body;
    const auction: AuctionListingType | null =
      await auctionListingModel.findById(auctionId);
    if (auction) {
      auction.status = "Ongoing";
      await auction.save();
      const auctionRoomSocket = io(`${process.env.SOCKET_SERVER}/auctionRoom`);
      auctionRoomSocket.emit("startRoom", auction._id);
      auction.participatingBidders.map(async (value) => {
        const bidder: IBidder = await bidderModel.findByIdAndUpdate(
          value.bidderId,
          {
            $push: {
              notifications: {
                notificationMessage:
                  "Auction room started for " + auction.title + " auction",
                context: {
                  receptionDate: new Date(),
                  frontContext: "auctionRoomStart",
                  contextId: auction._id,
                  notificationIcon: auction.productPictures[0],
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
    }
    return response.json({ success: true });
  } catch (err) {
    console.log(err);
    return response.json({ error: true });
  }
}

export async function end(req: express.Request, response: express.Response) {
  try {
    const { auctionId, winningBidder } = req.body;
    const auction: AuctionListingType | null =
      await auctionListingModel.findById(auctionId);
    if (auction) {
      auction.status = "Finished";
      auction.endDate = new Date();
      console.log(winningBidder);
      auction.winningBidder = {
        name: String(winningBidder.bidderName),
        _id: winningBidder._id,

        winningPrice: winningBidder.winningPrice,
      };
      await auction.save();
      auctionRoomNameSpace.to(auctionId).emit("endAuction", auction);
      auction.participatingBidders.map(async (value) => {
        const bidder = await bidderModel.findByIdAndUpdate(value.bidderId, {
          $push: {
            notifications: {
              notificationMessage:
                "Auction room ended for " +
                auction.title +
                " auction, Thank you for your participation",
              context: {
                receptionDate: new Date(),
                frontContext: "auctionEnded",
                notificationIcon: auction.productPictures[0],
              },
            },
          },
          $pull: {
            "auctionReferences.upcoming": auction._id,
          },
        });
        bidderNameSpace.emit("refreshData", {
          bidderSocketId: bidder.socketId,
        });
      });
      const delivery = await deliveryModel.create({
        auctionId: auction._id,
        bidderId: winningBidder._id,
        sellerId: auction.sellerId,
        guarantee: auction.guarantee,
        productInformations: {
          productName: auction.title,
          productId: auction._id,
          productPicture: auction.productPictures[0],
        },
      });
      const platformFees =
        winningBidder.winningPrice * (auction.platformFees / 100);
      const seller: ISeller = await sellerModel.findByIdAndUpdate(
        auction.sellerId,
        {
          $pull: {
            "createdAuctions.upcoming": auction._id,
          },
          $push: {
            "createdAuctions.finished": auction._id,
            "deliveries.pending": delivery._id,
            notifications: {
              notificationMessage:
                "Auction room ended for " + auction.title + " auction",
              context: {
                receptionDate: new Date(),
                frontContext: "auctionEnded",
                contextId: auction._id,
                notificationIcon: auction.productPictures[0],
              },
            },
            transactions: {
              amount: winningBidder.winningPrice - platformFees,
              context: "Auction Payment",
              date: new Date(),
              reciever: "Me",
            },
          },
          $inc: {
            earnnings: winningBidder.winningPrice - platformFees,
            platformFees: platformFees,
            ["auctionEarnings." + auction.listingType]:
              winningBidder.winningPrice - platformFees,
          },
        }
      );

      const bidder = await bidderModel.findByIdAndUpdate(winningBidder._id, {
        $inc: {
          "balance.activeBalance": -winningBidder.winningPrice,
        },
        $push: {
          transactions: {
            amount: winningBidder.winningPrice,
            context: "Auction Payment",
            date: new Date(),
            reciever: seller.name,
          },
          "deliveries.pending": delivery._id,
          notifications: {
            notificationMessage:
              "Congratulations on winning  " + auction.title + " auction!",
            context: {
              receptionDate: new Date(),
              frontContext: "auctionWin",
              contextId: auction._id,
              notificationIcon: auction.productPictures[0],
            },
          },
        },
      });
      return response.json({
        success: true,
        bidderSocketId: bidder.socketId,
        auctionTitle: auction.title,
      });
    } else {
      return response.json({ success: false, nonexistant: true });
    }
  } catch (err) {
    console.log(err);
    return response.json({ error: true });
  }
}
