import mongoose from "mongoose";
const Schema = mongoose.Schema;
const biddingRoomSchema = new Schema({
  auctionId: {
    type: Schema.Types.ObjectId,
    ref: "auctionListing",
  },
  highestBid: {
    type: Number,
  },
  highestBidder: {
    name: {
      type: String,
      required: true,
    },
    bid: {
      type: Number,
      required: true,
    },
  },
  bidHistory: [
    {
      name: {
        type: String,
        required: true,
      },
      picture: {
        type: String,
        required: true,
      },
      time: {
        type: Date,
        required: true,
      },
      bid: {
        type: Number,
        required: true,
      },
    },
  ],
});

const biddingRoomModel =
  mongoose.models.biddingRoomModel ||
  mongoose.model("biddingRoomModel", biddingRoomSchema);
export default biddingRoomModel;
