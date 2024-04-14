import axios from "axios";
import nodeSchedule from "node-schedule";
import { io } from "socket.io-client";

let connectedBidders: Record<string, any> = {};
const auctionStartReminder = new Map();
const deliveryReminder = new Map();
const bidderNameSpaceLogic = (renterNameSpace: any) => {
  renterNameSpace.on("connection", (socket: any) => {
    socket.on("bidderConnection", async (bidderSocketId: string) => {
      const bidder = connectedBidders[bidderSocketId];

      if (bidder && bidder.socketId) {
        const socketId = bidder.socketId;
        connectedBidders[bidderSocketId] = {
          socketId: socket.id,
        };
        socket.to(socketId).emit("confirmAuth", bidderSocketId);
      }
      connectedBidders[bidderSocketId] = {
        socketId: socket.id,
      };
    });
    renterNameSpace.on("refreshData", (bidderSocketId: string) => {
      const bidder = connectedBidders[bidderSocketId];
      if (bidder && bidder.socketId) {
        socket.to(bidder.socketId).emit("refreshData");
      }
    });
  });

  renterNameSpace.on("disconnect", (socket: any) => {});
};

export default bidderNameSpaceLogic;
