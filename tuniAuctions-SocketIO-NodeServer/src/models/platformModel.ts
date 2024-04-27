import mongoose from "mongoose";
const Schema = mongoose.Schema;
const platformSchema = new Schema({
  earnings: {
    type: Number,
    default: 0,
  },
  transactions: [
    {
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      from: {
        type: String,
        required: true,
      },
      sellerId: {
        type: Schema.Types.ObjectId,
      },
      context: {
        type: String,
      },
    },
  ],
  packagesBought: {
    standard: {
      type: Number,
      default: 0,
    },
    premium: {
      type: Number,
      default: 0,
    },
  },
});
const platformModel =
  mongoose.models.platformModel ||
  mongoose.model("platformModel", platformSchema);
export default platformModel;
