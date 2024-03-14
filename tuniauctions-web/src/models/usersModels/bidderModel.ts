import mongoose from "mongoose";
import generalSchema from "./generalUser";
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
    default: "",
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
