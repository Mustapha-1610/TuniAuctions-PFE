import axios from "axios";
import { ObjectId } from "mongoose";
import nodeSchedule from "node-schedule";
import { io } from "socket.io-client";

let roomTimers = new Map<ObjectId, roomData>();

let participatinBidders: [string] = [""];
const auctionRoomSocketLogic = (auctionRoomNameSpace: any) => {
  auctionRoomNameSpace.on("connection", (socket: any) => {
    socket.on("startRoom", (auctionId: ObjectId) => {
      if (!roomTimers.has(auctionId)) {
        roomTimers.set(auctionId, {
          roomTimer: 2000,
          participatingBidder: [],
        });
      }
      const countdown = setInterval(async () => {
        const auctionRoom = roomTimers.get(auctionId);
        if (auctionRoom.roomTimer <= 0) {
          clearInterval(countdown);
        } else {
          roomTimers.set(auctionId, {
            ...auctionRoom,
            roomTimer: auctionRoom.roomTimer - 1,
          });

          const updatedTimerValue = roomTimers.get(auctionId);
          if (updatedTimerValue.roomTimer <= 0) {
            auctionRoomNameSpace.to(auctionId).emit("endAuctionRoom");
            clearInterval(countdown);
          } else {
            const minutes = Math.floor(updatedTimerValue.roomTimer / 60);
            const seconds = updatedTimerValue.roomTimer % 60;
            const timeFormat = `${minutes}:${
              seconds < 10 ? "0" : ""
            }${seconds}`;
            auctionRoomNameSpace.to(auctionId).emit("updateTimer", timeFormat);
          }
        }
      }, 1000);
    });
    socket.on("bidderJoinedRoom", (data: BidderJoinedRoomDataType) => {
      console.log("bidderJoinedRoom " + data);
      socket.join(data.auctionId);
      let currentRoom = roomTimers.get(data.auctionId);
      console.log(currentRoom);
      if (currentRoom) {
        if (
          !currentRoom.participatingBidder.includes(
            data.bidderSocketId.toString()
          )
        ) {
          currentRoom.participatingBidder.push(data.bidderSocketId.toString());
        }

        const frontData = {
          participatingBidders: currentRoom.participatingBidder.length,
          roomTimer: currentRoom.roomTimer,
        };
        auctionRoomNameSpace.to(data.auctionId).emit("userJoined", frontData);
      }
    });
    socket.on("submitNewBid", (data: submitNewBid) => {
      console.log("submit new Bid " + data);
      const auctionRoom = roomTimers.get(data.auctionId);
      if (auctionRoom) {
        roomTimers.set(data.auctionId, {
          ...auctionRoom,
          roomTimer: 45,
          heighestBidder: {
            bid: data.bid,
            bidderName: data.bidderName,
            bidderPicture: data.bidderPicture,
            submitTime: data.submitTime,
            bidderSocketId: data.bidderSocketId,
          },
        });
        const frontData = {
          highestBidder: data.bidderName,
          highestBid: data.bid,
        };
        auctionRoomNameSpace
          .to(data.auctionId)
          .emit("newHighestBidder", frontData);
      }
    });
  });

  auctionRoomNameSpace.on("disconnect", (socket: any) => {});
};

export default auctionRoomSocketLogic;

interface BidderJoinedRoomDataType {
  auctionId: ObjectId;
  bidderSocketId: ObjectId;
}

interface roomData {
  roomTimer: number;
  participatingBidder?: string[];
  heighestBidder?: {
    bidderName: string;
    bid: number;
    submitTime: Date;
    bidderPicture: string;
    bidderSocketId: ObjectId;
  };
}

interface submitNewBid {
  bidderName: string;
  bid: number;
  submitTime: Date;
  bidderPicture: string;
  auctionId: ObjectId;
  bidderSocketId: ObjectId;
}
