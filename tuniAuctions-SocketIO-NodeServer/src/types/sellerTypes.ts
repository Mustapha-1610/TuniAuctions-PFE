import mongoose, { Document, Schema } from "mongoose";

interface Location {
  city: string;
  municipality: string;
  street: string;
}

interface CreatedAuctions {
  upcoming: mongoose.Types.ObjectId[];
  finished: mongoose.Types.ObjectId[];
}

interface PackageCount {
  Standard: number;
  Premium: number;
  [key: string]: number;
}

interface AuctionEarnings {
  Standard: number;
  Premium: number;
  Basic: number;
  [key: string]: number;
}

interface Deliveries {
  pending: mongoose.Types.ObjectId[];
  delivered: mongoose.Types.ObjectId[];
}

interface PassResetCode {
  active: boolean;
  secretCode: string;
}

interface NotificationContext {
  receptionDate: Date;
  frontContext: string;
  contextId: Schema.Types.ObjectId;
}

interface Notification {
  notificationMessage: string;
  context: NotificationContext;
}

interface Transaction {
  amount: number;
  date: Date;
  reciever: string;
  context: string;
}

export interface ISeller extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  description: string;
  businessPicture: string;
  coverPicture: string;
  registrationLicense: string;
  location: Location;
  createdAuctions: CreatedAuctions;
  earnnings: number;
  platformFees: number;
  packageCount: PackageCount;
  deliveries: Deliveries;
  strikes: number;
  email: string;
  password: string;
  disabled: boolean;
  verified: boolean;
  refreshToken: string;
  passResetCode: PassResetCode;
  notifications: Notification[];
  transactions: Transaction[];
  socketId: string;
  auctionEarnings: AuctionEarnings;
}

export interface ISellerFrontData {
  _id: Schema.Types.ObjectId;
  socketId: string;
  name: string;
  description: string;
  businessPicture: string;
  coverPicture: string;
  location: Location;
  createdAuctions: CreatedAuctions;
  earnnings: number;
  platformFees: number;
  packageCount: PackageCount;
  deliveries: Deliveries;
  strikes: number;
  email: string;
  refreshToken: string;
  notifications: Notification[];
  transactions: Transaction[];
  auctionEarnings: AuctionEarnings;
}
