import mongoose from "mongoose";
const Schema = mongoose.Schema;
const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const adminModel =
  mongoose.models.adminModel || mongoose.model("adminModel", adminSchema);
export default adminModel;
