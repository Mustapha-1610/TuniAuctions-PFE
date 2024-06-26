let connectedAdmin: Record<string, any> = {};
const adminNameSpaceLogic = (adminNameSpace: any) => {
  adminNameSpace.on("connection", (socket: any) => {
    socket.on("refreshData", () => {
      adminNameSpace.emit("refreshAdminData");
    });
  });

  adminNameSpace.on("adminNameSpaceLogic", (socket: any) => {});
};

export default adminNameSpaceLogic;
