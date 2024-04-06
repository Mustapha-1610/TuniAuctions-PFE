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
    },
    promotionalDescription: {
      type: String,
    },
    storeLink: {
      type: String,
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
    type: Number,
    default: 0,
  },
  uniqueViews: {
    type: [String],
  },
  genderViews: {
    Male: {
      type: Number,
      default: 0,
    },
    Female: {
      type: Number,
      default: 0,
    },
  },
  status: {
    type: String,
    enum: ["Pending Start", "Ongoing", "Finished"],
    default: "Pending Start",
  },
  biddingRoomId: {
    type: Schema.Types.ObjectId,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  participatingBidders: {
    type: [Schema.Types.ObjectId],
  },
  winningBidder: {
    name: {
      type: String,
    },
    winningPrice: {
      type: Number,
    },
    _id: { type: Schema.Types.ObjectId },
  },
});

const auctionListingModel =
  mongoose.models.auctionListingModel ||
  mongoose.model("auctionListingModel", auctionListingSchema);
export default auctionListingModel;
