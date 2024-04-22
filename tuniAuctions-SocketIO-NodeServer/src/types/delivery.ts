import { Document, Types } from "mongoose";

export interface DeliveryType extends Document {
  auctionId: Types.ObjectId;
  bidderId: Types.ObjectId;
  sellerId: Types.ObjectId;
  status:
    | "Pending bidder informations"
    | "Pending delivery shipment"
    | "Pending delivery"
    | "Delivered"
    | "Reported";
  expectedDeliveryDate?: {
    from: Date;
    to: Date;
  };
  deliveryDate?: Date;
  guarantee?: string;
  biddderDeliveryInformations?: {
    name?: string;
    phoneNumber?: number;
    sreet?: string;
  };
  sellerName: string;
  productInformations: {
    productName: string;
    productId: Types.ObjectId;
    productPicture: string;
  };
  sellerReview: boolean;
}
