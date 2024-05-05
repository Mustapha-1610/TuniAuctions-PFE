import axios from "axios";
import { ObjectId } from "mongoose";
import { io } from "socket.io-client";

let roomTimers = new Map<ObjectId, roomData>();
interface auctionStartData {
  auctionId: ObjectId;
  startingBid: number;
}
const auctionRoomSocketLogic = (auctionRoomNameSpace: any) => {
  auctionRoomNameSpace.on("connection", (socket: any) => {
    socket.on("startRoom", (data: auctionStartData) => {
      if (!roomTimers.has(data.auctionId)) {
        roomTimers.set(data.auctionId, {
          roomTimer: 2000,
          participatingBidder: [],
          heighestBidder: {
            bid: data.startingBid,
            bidderName: "",
            bidderPicture: "",
            bidderId: "",
            bidderSocketId: "",
          },
        });
      }
      const countdown = setInterval(async () => {
        const auctionRoom = roomTimers.get(data.auctionId);
        if (auctionRoom.roomTimer <= 0) {
          clearInterval(countdown);
        } else {
          roomTimers.set(data.auctionId, {
            ...auctionRoom,
            roomTimer: auctionRoom.roomTimer - 1,
          });

          const updatedTimerValue = roomTimers.get(data.auctionId);
          if (updatedTimerValue.roomTimer <= 0) {
            await axios
              .post(`${process.env.SOCKET_SERVER}/api/auctionRoom/end`, {
                auctionId: data.auctionId,
                winningBidder: {
                  _id: auctionRoom.heighestBidder.bidderId,
                  name: auctionRoom.heighestBidder.bidderName,
                  winningPrice: auctionRoom.heighestBidder.bid,
                },
              })
              .then((res) => {
                if (res.data.success) {
                  const bidderSocket = io(
                    `${process.env.SOCKET_SERVER}/bidder`
                  );
                  bidderSocket.on("connect", () => {
                    const data: DisplayCongrats = {
                      bidderSocketId: res.data.bidderSocketId,
                      auctionTitle: res.data.auctionTitle,
                    };
                    bidderSocket.emit("displayCongrats", data);
                  });
                }
              });
            clearInterval(countdown);
          }
        }
      }, 1000);
      const fixTimer = setInterval(() => {
        const roomData = roomTimers.get(data.auctionId);
        if (roomData.roomTimer > 0) {
          auctionRoomNameSpace
            .to(data.auctionId)
            .emit("adjustTimer", roomData.roomTimer);
        } else {
          clearInterval(fixTimer);
        }
      }, 10000);
    });
    socket.on("adminJoined", (auctionId: ObjectId) => {
      socket.join(auctionId);
      let currentRoom = roomTimers.get(auctionId);
      if (currentRoom) {
        const frontData = {
          participatingBidders: currentRoom.participatingBidder.length,
          roomTimer: currentRoom.roomTimer,
          bid: currentRoom.heighestBidder.bid
            ? currentRoom.heighestBidder.bid
            : 0,
          bidderName: currentRoom.heighestBidder.bidderName
            ? currentRoom.heighestBidder.bidderName
            : "",
          bidderPicture: currentRoom.heighestBidder.bidderPicture
            ? currentRoom.heighestBidder.bidderPicture
            : "",
          bidderId: currentRoom.heighestBidder.bidderId
            ? currentRoom.heighestBidder.bidderId
            : "",
        };
        socket.emit("userJoined", frontData);
      } else {
        socket.emit("endAuction");
      }
    });
    socket.on("bidderJoinedRoom", (data: BidderJoinedRoomDataType) => {
      socket.join(data.auctionId);
      let currentRoom = roomTimers.get(data.auctionId);
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
          bid: currentRoom.heighestBidder.bid
            ? currentRoom.heighestBidder.bid
            : 0,
          bidderName: currentRoom.heighestBidder.bidderName
            ? currentRoom.heighestBidder.bidderName
            : "",
          bidderPicture: currentRoom.heighestBidder.bidderPicture
            ? currentRoom.heighestBidder.bidderPicture
            : "",
          bidderId: currentRoom.heighestBidder.bidderId
            ? currentRoom.heighestBidder.bidderId
            : "",
        };
        socket.emit("userJoined", frontData);
      } else {
        socket.emit("endAuction");
      }
    });
    socket.on("submitNewBid", (data: submitNewBid) => {
      const auctionRoom = roomTimers.get(data.auctionId);
      if (auctionRoom) {
        roomTimers.set(data.auctionId, {
          ...auctionRoom,
          roomTimer: 45,
          heighestBidder: {
            bid: data.bid,
            bidderName: data.bidderName,
            bidderPicture: data.bidderPicture,
            bidderSocketId: data.bidderSocketId,
            bidderId: data.bidderId,
          },
        });
        console.log(roomTimers);
        const frontData = {
          bidderName: data.bidderName,
          bid: data.bid,
          bidderPicture: data.bidderPicture,
          bidderId: data.bidderId,
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
    bidderPicture: string;
    bidderSocketId: ObjectId | string;
    bidderId: ObjectId | string;
  };
}

interface submitNewBid {
  bidderName: string;
  bid: number;
  bidderPicture: string;
  auctionId: ObjectId;
  bidderSocketId: ObjectId;
  bidderId: ObjectId;
}

interface DisplayCongrats {
  bidderSocketId: string;
  auctionTitle: string;
}
