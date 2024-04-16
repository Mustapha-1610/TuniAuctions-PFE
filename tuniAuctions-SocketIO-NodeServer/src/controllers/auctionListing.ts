import bidderModel from "../../../tuniauctions-web/src/models/usersModels/bidderModel";
import express from "express";
import { verifyBidderTokens } from "../security/bidder/apiProtection";
import { AuctionListingType } from "../../../tuniauctions-web/src/models/types/auctionListing";
import { IBidder } from "../../../tuniauctions-web/src/models/usersModels/types/bidderTypes";
import { ISeller } from "../../../tuniauctions-web/src/models/usersModels/types/sellerTypes";

import auctionListingModel from "../../../tuniauctions-web/src/models/auctionListingModels/auctionListing";
import { bidderNameSpace } from "../server";
import { auctionRoomNameSpace } from "../server";
import { io as Client } from "socket.io-client";
export const auctionRoomSocket = Client("http://localhost:80/auctionRoom");
export const bidderRoomSocket = Client("http://localhost:80/bidder");
import sellerModel from "../../../tuniauctions-web/src/models/usersModels/sellerModel";
import deliveryModel from "../../../tuniauctions-web/src/models/auctionListingModels/deliveryModel";
import { verifySellerTokens } from "../security/seller/apiProtection";
import {
  basicListingType,
  premiumListingType,
} from "./zodSchema/auctionListingSchema";
import { returnSellerFrontData } from "../helpers/returnSellerFrontData";

export async function basic(req: express.Request, response: express.Response) {
  try {
    const res = await verifySellerTokens(req);
    console.log("something ig");
    if (res.isValid) {
      console.log("works");
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
      await seller.save();
      const sellerFrontData = returnSellerFrontData(seller);
      return response.json({ success: true, sellerFrontData });
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
