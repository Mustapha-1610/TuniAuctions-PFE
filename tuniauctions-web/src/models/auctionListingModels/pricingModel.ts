import mongoose from "mongoose";
const Schema = mongoose.Schema;
const pricingSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  listingsCount: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  positives: [String],
  platformFees: {
    type: Number,
    required: true,
  },
  purchaseCount: {
    type: Number,
    default: 0,
  },
});

const pricingModel =
  mongoose.models.pricingModel || mongoose.model("pricingModel", pricingSchema);
export default pricingModel;
