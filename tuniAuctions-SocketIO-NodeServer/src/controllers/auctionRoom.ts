import bidderModel from "../../../tuniauctions-web/src/models/usersModels/bidderModel";
import express from "express";
import { verifyBidderTokens } from "../security/bidder/apiProtection";
import { AuctionListingType } from "../../../tuniauctions-web/src/models/types/auctionListing";
import { IBidder } from "../../../tuniauctions-web/src/models/usersModels/types/bidderTypes";
import auctionListingModel from "../../../tuniauctions-web/src/models/auctionListingModels/auctionListing";
import { bidderNameSpace } from "../server";
import { auctionRoomNameSpace } from "../server";
import { io as Client } from "socket.io-client";
export const auctionRoomSocket = Client("http://localhost:80/auctionRoom");
export const bidderRoomSocket = Client("http://localhost:80/bidder");
export async function start(req: express.Request, response: express.Response) {
  try {
    const { auctionId } = req.body;
    const auction: AuctionListingType | null =
      await auctionListingModel.findById(auctionId);
    if (auction) {
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
