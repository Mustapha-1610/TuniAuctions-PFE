import mongoose from "mongoose";
const Schema = mongoose.Schema;
const pricingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  listingsCount: {
    type: Number,
    required: true,
  },
  platformFees: {
    type: Number,
    required: true,
  },
  videoLength: {
    type: Number,
    required: true,
  },
  buyItNowSection: {
    type: Boolean,
    required: true,
  },
  genderViews: {
    type: Boolean,
    required: true,
  },
  socialsSection: {
    type: Boolean,
    required: true,
  },
  featured: {
    type: Boolean,
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
