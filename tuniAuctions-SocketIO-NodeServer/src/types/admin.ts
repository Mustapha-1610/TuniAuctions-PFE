import { ObjectId } from "mongodb";
import mongoose, { Document } from "mongoose";
interface NotificationContext {
  receptionDate: Date;
  frontContext: string;
  contextId?: mongoose.Types.ObjectId;
  notificationIcon: string;
}

export interface adminModelType extends Document {
  email: string;
  password: string;
  name: string;
  refreshToken: string;
  notifications: NotificationContext[];
  _id: ObjectId;
}
