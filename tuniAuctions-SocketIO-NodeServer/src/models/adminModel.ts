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
  refreshToken: {
    type: String,
  },
  notifications: [
    {
      notificationMessage: {
        type: String,
        required: true,
      },
      context: {
        receptionDate: {
          type: Date,
          required: true,
        },
        frontContext: {
          type: String,
        },
        contextId: {
          type: Schema.Types.ObjectId,
        },
        notificationIcon: { type: String },
        displayName: { type: String },
      },
      readStatus: {
        type: Boolean,
        default: false,
      },
    },
  ],
});
const adminModel =
  mongoose.models.adminModel || mongoose.model("adminModel", adminSchema);
export default adminModel;
