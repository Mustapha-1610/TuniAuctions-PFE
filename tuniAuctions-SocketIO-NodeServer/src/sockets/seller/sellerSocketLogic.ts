import axios from "axios";
import nodeSchedule from "node-schedule";
import { io } from "socket.io-client";

let connectedSellers: Record<string, any> = {};
const auctionStartReminder = new Map();
const deliveryReminder = new Map();
const sellerNameSpaceLogic = (sellerNameSpace: any) => {
  sellerNameSpace.on("connection", (socket: any) => {});

  sellerNameSpace.on("disconnect", (socket: any) => {});
};

export default sellerNameSpaceLogic;
