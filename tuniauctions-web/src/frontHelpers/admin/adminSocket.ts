// socket.js
import { io } from "socket.io-client";

const SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_IO_SERVER;

const adminSocket = io(`${SERVER_URL}/admin`);
export default adminSocket;
