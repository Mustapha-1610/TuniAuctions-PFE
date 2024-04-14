// socket.js
import { io } from "socket.io-client";

const SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_IO_SERVER;

const auctionRoomSocket = io(`${SERVER_URL}/auctionRoom`);
export default auctionRoomSocket;
