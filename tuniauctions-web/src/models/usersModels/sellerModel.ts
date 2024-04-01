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
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
  },
  coverPicture: {
    type: String,
    default:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
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
