let connectedAdmin: Record<string, any> = {};
const adminNameSpaceLogic = (adminNameSpace: any) => {
  adminNameSpace.on("connection", (socket: any) => {
    socket.on("refreshData", () => {
      console.log("refreshing Admin Data");
      adminNameSpace.emit("refreshAdminData");
    });
  });

  adminNameSpace.on("adminNameSpaceLogic", (socket: any) => {});
};

export default adminNameSpaceLogic;
