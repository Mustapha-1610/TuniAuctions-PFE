let connectedBidders: Record<string, any> = {};
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
      if (bidder && bidder.socketId) {
        socket.to(bidder.socketId).emit("refreshData");
      }
    });
    socket.on("displayCongrats", (data: any) => {
      const bidder = connectedBidders[data.bidderSocketId];

      if (bidder && bidder.socketId) {
        socket.to(bidder.socketId).emit("showCongratsModal", data.auctionTitle);
      }
    });
  });

  bidderNameSpace.on("disconnect", (socket: any) => {});
};

export default bidderNameSpaceLogic;
