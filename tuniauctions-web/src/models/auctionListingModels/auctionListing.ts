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
  productPictures: {
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
  startingDate: {
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
  guarantee: {
    type: String,
  },
  buyItNowSection: {
    promotionalPicture: {
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
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    tiktok: {
      type: String,
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
  minParticipatingBidders: {
    type: Number,
    required: true,
    default: 0,
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
  sellerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const auctionListingModel =
  mongoose.models.auctionListingModel ||
  mongoose.model("auctionListingModel", auctionListingSchema);
export default auctionListingModel;
