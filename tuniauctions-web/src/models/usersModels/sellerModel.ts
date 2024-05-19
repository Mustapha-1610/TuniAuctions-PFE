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
    default:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100",
  },
  coverPicture: {
    type: String,
    default:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100",
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
      type: [Schema.Types.ObjectId],
    },
    finished: {
      type: [Schema.Types.ObjectId],
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
    Standard: {
      type: Number,
      default: 0,
    },
    Premium: {
      type: Number,
      default: 0,
    },
  },
  deliveries: {
    pending: [Schema.Types.ObjectId],
    delivered: [Schema.Types.ObjectId],
  },
  strikes: {
    type: Number,
  },
  auctionEarnings: {
    Premium: {
      type: Number,
      default: 0,
    },
    Basic: {
      type: Number,
      default: 0,
    },
    Standard: {
      type: Number,
      default: 0,
    },
  },
  reviews: {
    total: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
});
sellerSchema.add(generalSchema);

const sellerModel =
  mongoose.models.sellerModel || mongoose.model("sellerModel", sellerSchema);
export default sellerModel;
