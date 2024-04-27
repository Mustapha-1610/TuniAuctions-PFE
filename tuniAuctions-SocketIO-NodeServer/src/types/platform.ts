import { ObjectId } from "mongodb";
import mongoose, { Document } from "mongoose";

export interface platformModelType extends Document {
  earnings: number;
  password: string;
  transactions: {
    amount: string;
    date: Date;
    from: string;
    sellerId: ObjectId;
    context: string;
  }[];
  packagesBought: {
    standard: number;
    premium: number;
    [key: string]: number;
  };
}
