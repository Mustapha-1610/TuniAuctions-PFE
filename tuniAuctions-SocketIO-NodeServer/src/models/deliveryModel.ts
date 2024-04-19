import mongoose from "mongoose";
const Schema = mongoose.Schema;
const deliverySchema = new Schema({
  auctionId: {
    type: Schema.Types.ObjectId,
    ref: "auctionListing",
    required: true,
  },
  bidderId: {
    type: Schema.Types.ObjectId,
    ref: "bidder",
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "seller",
    required: true,
  },
  status: {
    type: String,
    enum: [
      "Pending bidder informations",
      "Pending delivery shipment",
      "Pending delivery",
      "Delivered",
      "Reported",
    ],
    default: "Pending bidder informations",
  },
  expectedDeliveryDate: {
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
  },
  deliveryDate: {
    type: Date,
  },
  guarantee: {
    type: String,
  },
  biddderDeliveryInformations: {
    name: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    sreet: {
      type: String,
    },
  },
  sellerName: {
    type: String,
  },
  productInformations: {
    productName: {
      type: String,
    },
    productId: {
      type: Schema.Types.ObjectId,
    },
    productPicture: {
      type: String,
    },
  },
});

const deliveryModel =
  mongoose.models.deliveryModel ||
  mongoose.model("deliveryModel", deliverySchema);
export default deliveryModel;
