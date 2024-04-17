import { Document, Types } from "mongoose";

export interface DeliveryType extends Document {
  auctionId: Types.ObjectId;
  bidderId: Types.ObjectId;
  sellerId: Types.ObjectId;
  status:
    | "pending bidder informations"
    | "pending delivery shipment"
    | "pending delivery"
    | "delivered"
    | "reported";
  expectedDeliveryDate?: Date;
  deliveryDate?: Date;
  guaranteeEndDate?: string;
  biddderDeliveryInformations?: {
    phoneNumber?: number;
    City?: string;
    municipality?: string;
    adress?: string;
  };
}
