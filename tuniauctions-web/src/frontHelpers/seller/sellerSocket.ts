// socket.js
import { io } from "socket.io-client";

const SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_IO_SERVER;

const sellerSocket = io(`${SERVER_URL}/seller`);
export default sellerSocket;
