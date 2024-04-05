import axios from "axios";
import nodeSchedule from "node-schedule";
import { io } from "socket.io-client";

let connectedBidders: Record<string, any> = {};
const auctionStartReminder = new Map();
const deliveryReminder = new Map();
const bidderNameSpaceLogic = (renterNameSpace: any) => {
  renterNameSpace.on("connection", (socket: any) => {});

  renterNameSpace.on("disconnect", (socket: any) => {});
};

export default bidderNameSpaceLogic;
