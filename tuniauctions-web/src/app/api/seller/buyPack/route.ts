import { connect } from "@/db/dbConfig";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import pricingModel from "@/models/auctionListingModels/pricingModel";
import { Pricing } from "@/models/types/pricing";
import platformModel from "@/models/usersModels/platformModel";
import { ISellerFrontData } from "@/models/usersModels/types/sellerTypes";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const res = await verifySellerToken(request);
    if (res.isValid) {
      await connect();
      const { pricingId } = await request.json();
      const pricing: Pricing | null = await pricingModel.findById(pricingId);
      if (pricing) {
        res.sellerAccount.packageCount[pricing.name] += pricing.listingsCount;
        res.sellerAccount.transactions.push({
          amount: pricing.price,
          context: "packagePayment",
          date: new Date(),
          reciever: "Tuni-Auctions",
        });
        res.sellerAccount.notifications.push({
          notificationMessage: "packagePayment",
          context: {
            receptionDate: new Date(),
            frontContext: "packagePayment",
            notificationIcon:
              "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/CircularReducedSizeTuniAuctionsLogo.png?alt=media&token=e5c93487-fd34-4e62-9602-964b3d0392fe",
            displayName: pricing.name,
          },
        });
        await platformModel.findOneAndUpdate(
          {},
          {
            $inc: {
              ["packagesBought." + pricing.name]: pricing.price,
              earnings: pricing.price,
            },
            $push: {
              transactions: {
                amount: pricing.price,
                context: `${pricing.name} Package purchase`,
                date: new Date(),
                from: res.sellerAccount.name,
                sellerId: res.sellerAccount._id,
              },
            },
          }
        );

        await res.sellerAccount.save();
        const sellerFrontData: ISellerFrontData = returnSellerFrontData(
          res.sellerAccount
        );
        return NextResponse.json({ success: true, sellerFrontData });
      }
    } else {
      return unautherizedError("err");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
