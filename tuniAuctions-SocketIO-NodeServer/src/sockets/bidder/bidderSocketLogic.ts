import axios from "axios";
import nodeSchedule from "node-schedule";
import { io } from "socket.io-client";

let connectedBidders: Record<string, any> = {};
const auctionStartReminder = new Map();
const deliveryReminder = new Map();
const bidderNameSpaceLogic = (bidderNameSpace: any) => {
  bidderNameSpace.on("connection", (socket: any) => {
    socket.on("bidderConnection", async (bidderSocketId: string) => {
      console.log("connected");
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
    bidderNameSpace.on("refreshData", (bidderSocketId: string) => {
      const bidder = connectedBidders[bidderSocketId];
      console.log(connectedBidders + "Refresh Data");
      if (bidder && bidder.socketId) {
        socket.to(bidder.socketId).emit("refreshData");
      }
    });
    socket.on("displayCongrats", (data: any) => {
      console.log(connectedBidders);
      console.log(data.bidderSocketId);
      const bidder = connectedBidders[data.bidderSocketId];
      console.log("displayCongrats");
      console.log(data);
      console.log(bidder);
      if (bidder && bidder.socketId) {
        socket.to(bidder.socketId).emit("showCongratsModal", data.auctionTitle);
      }
    });
  });

  bidderNameSpace.on("disconnect", (socket: any) => {});
};

export default bidderNameSpaceLogic;

interface DisplayCongrats {
  bidderSocketId: string;
  auctionTitle: string;
}
