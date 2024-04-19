let connectedSellers: Record<string, any> = {};
const sellerNameSpaceLogic = (sellerNameSpace: any) => {
  sellerNameSpace.on("connection", (socket: any) => {});

  sellerNameSpace.on("disconnect", (socket: any) => {});
};

export default sellerNameSpaceLogic;
