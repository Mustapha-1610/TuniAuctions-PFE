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
      "pending bidder informations",
      "pending delivery shipment",
      "pending delivery",
      "delivered",
      "reported",
    ],
    default: "pending bidder informations",
  },
  expectedDeliveryDate: {
    type: Date,
  },
  deliveryDate: {
    type: Date,
  },
  warrantyEndDate: {
    type: Date,
  },
  biddderDeliveryInformations: {
    phoneNumber: {
      type: Number,
    },
    City: {
      type: String,
    },
    municipality: {
      type: String,
    },
    adress: {
      type: String,
    },
  },
  sellerPhoneNumber: {
    type: Number,
  },
});

const deliveryModel =
  mongoose.models.deliveryModel ||
  mongoose.model("deliveryModel", deliverySchema);
export default deliveryModel;
