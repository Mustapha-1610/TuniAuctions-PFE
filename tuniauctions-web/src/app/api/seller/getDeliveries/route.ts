import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { DeliveryType } from "@/models/types/delivery";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const res = await verifySellerToken(request);
    if (res.isValid) {
      const pendingDeliveries: DeliveryType[] | undefined =
        await deliveryModel.find({
          _id: {
            $in: res.sellerAccount.deliveries.pending,
          },
        });
      return NextResponse.json<sellerFetchDeliveriesType>({
        pendingDeliveries,
      });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface sellerFetchDeliveriesType {
  pendingDeliveries: DeliveryType[] | undefined;
}
