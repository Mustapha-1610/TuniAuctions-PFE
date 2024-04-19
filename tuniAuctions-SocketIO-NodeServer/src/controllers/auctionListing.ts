import bidderModel from "../../../tuniauctions-web/src/models/usersModels/bidderModel";
import express from "express";
import { verifyBidderTokens } from "../security/bidder/apiProtection";
import { AuctionListingType } from "../../../tuniauctions-web/src/models/types/auctionListing";
import { IBidder } from "../../../tuniauctions-web/src/models/usersModels/types/bidderTypes";
import { ISeller } from "../../../tuniauctions-web/src/models/usersModels/types/sellerTypes";

import auctionListingModel from "../../../tuniauctions-web/src/models/auctionListingModels/auctionListing";
import { bidderNameSpace } from "../server";
import { auctionRoomNameSpace } from "../server";
import { io } from "socket.io-client";
const auctionRoomSocket = io(`${process.env.SOCKET_SERVER}/auctionRoom`);
const bidderRoomSocket = io(`${process.env.SOCKET_SERVER}/bidder`);
import sellerModel from "../../../tuniauctions-web/src/models/usersModels/sellerModel";
import deliveryModel from "../../../tuniauctions-web/src/models/auctionListingModels/deliveryModel";
import { verifySellerTokens } from "../security/seller/apiProtection";
import {
  basicListingType,
  premiumListingType,
} from "./zodSchema/auctionListingSchema";
import { returnSellerFrontData } from "../helpers/returnSellerFrontData";
import axios from "axios";

import nodeSchedule from "node-schedule";
export async function basic(req: express.Request, response: express.Response) {
  try {
    console.log(req.body);
    const res = await verifySellerTokens(req);

    if (res.isValid) {
      const seller = res.sellerAccount;
      const {
        title,
        guarentee,
        description,
        openingBid,
        originalPrice,
        productCategory,
        productPictures,
        promotionalVideo,
        startingDate,
        minParticipatingBidders,
      }: basicListingType = req.body;

      const newAuction = await auctionListingModel.create({
        listingType: "Basic",
        title,
        description,
        category: productCategory,
        promotionalVideo,
        productPictures: productPictures.reverse(),
        originalPrice,
        startingDate,
        platformFees: 8,
        openingBid,
        guarantee: guarentee.length + " " + guarentee.period,
        featured: true,
        minParticipatingBidders,
        sellerId: seller._id,
      });
      seller.createdAuctions.upcoming.push(newAuction._id);
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
      return response.json({ authError: true });
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
    const res = await verifySellerTokens(req);
    if (res.isValid) {
      const seller = res.sellerAccount;
      if (seller.packageCount.Standard > 0) {
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
          startingDate,
          minParticipatingBidders,
        }: premiumListingType = req.body;
        const newAuction = await auctionListingModel.create({
          listingType: "Standard",
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
          featured: true,
          minParticipatingBidders,
          sellerId: seller._id,
        });
        seller.createdAuctions.upcoming.push(newAuction._id);
        seller.packageCount.Standard -= 1;
        await seller.save();
        const sellerFrontData = returnSellerFrontData(seller);
        return response.json({ success: true, sellerFrontData });
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
        const sellerFrontData = returnSellerFrontData(seller);
        return response.json({ success: true, sellerFrontData });
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
        console.log(
          resfreshedAuction.participatingBidders.length,
          resfreshedAuction.minParticipatingBidders,
          "Participating"
        );
        if (
          resfreshedAuction.participatingBidders.length <
          resfreshedAuction.minParticipatingBidders
        ) {
          console.log("made it here");

          await handleReSchedule(resfreshedAuction);
        } else {
          await handleStart(resfreshedAuction);
        }
      });
      return true;
    } else {
      console.log(newAuction + "ERROR");
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
        console.log("so far so good");
        const bidder = await bidderModel.findByIdAndUpdate(value.bidderId, {
          $push: {
            notifications: {
              notificationMessage:
                auctionlisting.title +
                " auction has been delayed for 3 days due to minimum participating bidders treshhold not being met",
              context: {
                receptionDate: new Date(),
                frontContext: "auctionDelay",
                contextId: auctionlisting._id,
                notificationIcon: auctionlisting.productPictures[0],
              },
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
              notificationMessage:
                auctionlisting.title +
                " auction has been delayed for a week due to minimum participating bidders treshhold not being met",
              context: {
                receptionDate: new Date(),
                frontContext: "auctionDelay",
                contextId: auctionlisting._id,
                notificationIcon: auctionlisting.productPictures[0],
              },
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

  auctionRoomSocket.emit("startRoom", auctionlisting._id);
  auctionlisting.participatingBidders.map(async (value) => {
    const bidder: IBidder = await bidderModel.findByIdAndUpdate(
      value.bidderId,
      {
        $push: {
          notifications: {
            notificationMessage:
              "Auction room started for " + auctionlisting.title + " auction",
            context: {
              receptionDate: new Date(),
              frontContext: "auctionRoomStart",
              contextId: auctionlisting._id,
              notificationIcon: auctionlisting.productPictures[0],
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
