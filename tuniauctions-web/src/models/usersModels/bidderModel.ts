import mongoose from "mongoose";
import generalSchema from "./generalUser";
import { z } from "zod";
const Schema = mongoose.Schema;
const bidderSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  gmailAccount: {
    type: Boolean,
    default: false,
  },
  profilePicture: {
    type: String,
    default:
      "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/free-user-icon-3296-thumb.png?alt=media&token=61327e03-00bd-4dae-98d7-e56e8bfccba6",
  },
  verificationCode: {
    type: String,
  },

  balance: {
    activeBalance: {
      type: Number,
      default: 5,
    },
    lockedBalance: {
      totalLockedBalance: {
        type: Number,
        default: 0,
      },
      lockedBalanceHistory: [
        {
          auctionId: {
            type: Schema.Types.ObjectId,
          },
          lockedAmount: {
            type: Number,
          },
        },
      ],
    },
  },
  auctionReferences: {
    upcoming: [String],
    saved: [String],
  },
  deliveries: {
    pending: [String],
    delivered: [String],
  },
  adressPresets: [
    {
      phoneNumber: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
    },
  ],
});
bidderSchema.add(generalSchema);
const bidderModel =
  mongoose.models.bidderModel || mongoose.model("bidderModel", bidderSchema);
export default bidderModel;
