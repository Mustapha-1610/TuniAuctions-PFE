import mongoose from "mongoose";
const Schema = mongoose.Schema;
const auctionListingSchema = new Schema({
  listingType: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  promotionalVideo: {
    type: String,
    required: true,
  },
  pictures: {
    type: [String],
  },
  platformFees: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  openingBid: {
    type: Number,
    default: 0,
  },
  warranty: {
    type: String,
  },
  buyItNow: {
    promotionalImage: {
      type: String,
      required: true,
    },
    promotionalDescription: {
      type: String,
      required: true,
    },
    storeLink: {
      type: String,
      required: true,
    },
  },
  socialsSection: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  totalViews: {
    type: [String],
  },
  uniqueViews: {
    type: [String],
  },
  genderViews: {
    male: {
      type: Number,
    },
    female: {
      type: Number,
    },
  },
  status: {
    type: String,
    enum: ["awaiting", "ongoing", "finished"],
    default: "awaiting",
  },
  biddingRoomId: {
    type: String,
  },
});

const auctionListingModel =
  mongoose.models.auctionListingModel ||
  mongoose.model("auctionListingModel", auctionListingSchema);
export default auctionListingModel;
