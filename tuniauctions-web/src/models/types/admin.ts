import { ObjectId } from "mongodb";
import mongoose, { Document } from "mongoose";

export interface adminModelType extends Document {
  email: string;
  password: string;
  name: string;
}
