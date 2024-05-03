import { ObjectId } from "mongodb";
import mongoose, { Document } from "mongoose";
interface NotificationContext {
  notificationMessage: string;
  context: {
    receptionDate: Date;
    frontContext?: string;
    contextId: string;
    notificationIcon: string;
    displayName: string;
  };
  readStatus: boolean;
}

export interface adminModelType extends Document {
  email: string;
  password: string;
  name: string;
  refreshToken: string;
  notifications: NotificationContext[];
  _id: ObjectId;
}
