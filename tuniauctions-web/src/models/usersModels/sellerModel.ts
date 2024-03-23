import mongoose from "mongoose";
import generalSchema from "./generalUser";
const Schema = mongoose.Schema;
const sellerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  businessPicture: {
    type: String,
  },
  coverPicture: {
    type: String,
  },
  registrationLicense: {
    type: String,
    required: true,
  },
  location: {
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
  createdAuctions: {
    upcoming: {
      type: [String],
    },
    finished: {
      type: [String],
    },
  },
  earnnings: {
    type: Number,
    default: 0,
  },
  platformFees: {
    type: Number,
    default: 0,
  },
  packageCount: {
    standard: {
      type: Number,
      default: 0,
    },
    premium: {
      type: Number,
      default: 0,
    },
  },
  deliveries: {
    pending: [String],
    delivered: [String],
  },
  strikes: {
    type: Number,
  },
});
sellerSchema.add(generalSchema);

const sellerModel =
  mongoose.models.sellerModel || mongoose.model("sellerModel", sellerSchema);
export default sellerModel;
