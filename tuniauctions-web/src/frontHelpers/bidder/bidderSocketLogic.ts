// socket.js
import { io } from "socket.io-client";

const SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_IO_SERVER;

const bidderSocket = io(`${SERVER_URL}/bidder`);
export default bidderSocket;
