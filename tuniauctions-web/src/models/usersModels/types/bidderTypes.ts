import mongoose, { Document } from "mongoose";

export interface IBidder extends Document {
  fullName: string;
  gender: "Male" | "Female";
  gmailAccount: boolean;
  profilePicture: string;
  verificationCode: string;
  balance: {
    activeBalance: number;
    lockedBalance: {
      totalLockedBalance: number;
      lockedBalanceHistory: {
        auctionId: mongoose.Types.ObjectId;
        lockedAmount: number;
      }[];
    };
  };
  auctionReferences: {
    upcoming: string[];
    saved: string[];
  };
  deliveries: {
    pending: string[];
    delivered: string[];
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
      contextId: mongoose.Types.ObjectId;
    }[];
  };
  transactions: {
    amount: number;
    date: Date;
    reciever: string;
    context: string;
  }[];
  socketId: string;
}

export interface IBidderFrontData {
  fullName: string;
  gender: "Male" | "Female";
  profilePicture: string;
  balance: {
    activeBalance: number;
    lockedBalance: {
      totalLockedBalance: number;
      lockedBalanceHistory: {
        auctionId: mongoose.Types.ObjectId;
        lockedAmount: number;
      }[];
    };
  };
  auctionReferences: {
    upcoming: string[];
    saved: string[];
  };
  deliveries: {
    pending: string[];
    delivered: string[];
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
      contextId: mongoose.Types.ObjectId;
    }[];
  };
  transactions: {
    amount: number;
    date: Date;
    reciever: string;
    context: string;
  }[];
}
