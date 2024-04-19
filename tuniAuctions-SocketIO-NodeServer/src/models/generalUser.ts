import mongoose from "mongoose";
const Schema = mongoose.Schema;

const generalSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  refreshToken: {
    type: String,
  },
  passResetCode: {
    active: {
      type: Boolean,
      default: false,
    },
    secretCode: {
      type: String,
    },
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
      },
      readStatus: {
        type: Boolean,
        default: false,
      },
    },
  ],
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
      reciever: {
        type: String,
        required: true,
      },
      context: {
        type: String,
        required: true,
      },
    },
  ],
  socketId: {
    type: String,
    required: true,
  },
});

export default generalSchema;
