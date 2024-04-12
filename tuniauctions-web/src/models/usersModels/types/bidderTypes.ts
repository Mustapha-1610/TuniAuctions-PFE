import mongoose, { Document } from "mongoose";

export interface IBidder extends Document {
  fullName: string;
  gender: "Male" | "Female";
  gmailAccount: boolean;
  profilePicture: string;
  verificationCode: string;
  balance: {
    activeBalance: number;
    lockedBalance: number;
  };
  auctionReferences: {
    upcoming: mongoose.Types.ObjectId[];
    saved: mongoose.Types.ObjectId[];
  };
  deliveries: {
    pending: mongoose.Types.ObjectId[];
    delivered: mongoose.Types.ObjectId[];
  };
  adressPresets: {
    phoneNumber: number;
    city: string;
    municipality: string;
    street: string;
  }[];
  email: string;
  password: string;
  disabled: boolean;
  verified: boolean;
  refreshToken: string;
  passResetCode: {
    active: boolean;
    secretCode: string;
  };
  notifications: {
    notificationMessage: string;
    context: {
      receptionDate: Date;
      frontContext: string;
      contextId?: mongoose.Types.ObjectId;
      notificationIcon: string;
    };
    readStatus?: boolean;
  }[];
  transactions: {
    amount: number;
    date: Date;
    reciever: string;
    context: string;
  }[];
  socketId: string;
  _id: mongoose.Types.ObjectId;
}

export interface IBidderFrontData {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  gender: "Male" | "Female";
  profilePicture: string;
  balance: {
    activeBalance: number;
    lockedBalance: number;
  };
  auctionReferences: {
    upcoming: mongoose.Types.ObjectId[];
    saved: mongoose.Types.ObjectId[];
  };
  deliveries: {
    pending: mongoose.Types.ObjectId[];
    delivered: mongoose.Types.ObjectId[];
  };
  adressPresets: {
    phoneNumber: number;
    city: string;
    municipality: string;
    street: string;
  }[];
  email: string;
  notifications: {
    notificationMessage: string;
    context: {
      receptionDate: Date;
      frontContext: string;
      contextId?: mongoose.Types.ObjectId;
      notificationIcon: string;
    };
    readStatus?: boolean;
  }[];
  transactions: {
    amount: number;
    date: Date;
    reciever: string;
    context: string;
  }[];
  socketId: string;
}
