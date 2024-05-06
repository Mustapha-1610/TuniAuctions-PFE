let connectedSellers: Record<string, any> = {};
const sellerNameSpaceLogic = (sellerNameSpace: any) => {
  sellerNameSpace.on("connection", (socket: any) => {
    socket.on("sellerConnection", async (sellerSocketId: string) => {
      const seller = connectedSellers[sellerSocketId];
      console.log("seller conntected " + sellerSocketId);
      if (seller && seller.socketId) {
        const socketId = seller.socketId;
        connectedSellers[sellerSocketId] = {
          socketId: socket.id,
        };
        socket.to(socketId).emit("confirmAuth", sellerSocketId);
      }
      connectedSellers[sellerSocketId] = {
        socketId: socket.id,
      };
    });
    socket.on("refreshData", (sellerSocketId: string) => {
      console.log("refreshing seller Data " + sellerSocketId);
      const seller = connectedSellers[sellerSocketId];
      console.log(seller + "seller" + connectedSellers);
      if (seller && seller.socketId) {
        socket.to(seller.socketId).emit("refreshSellerData");
      }
    });
  });

  sellerNameSpace.on("disconnect", (socket: any) => {});
};

export default sellerNameSpaceLogic;
