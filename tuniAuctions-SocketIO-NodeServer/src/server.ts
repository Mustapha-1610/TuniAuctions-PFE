import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import bidderNameSpaceLogic from "./sockets/bidder/bidderSocketLogic";
import sellerNameSpaceLogic from "./sockets/seller/sellerSocketLogic";
import connectDB from "../DB/dbConfig";
import auctionRouter from "./routers/auctionRoomRouter";
import auctionRoomSocketLogic from "./sockets/auction/auctionRoomSocketLogic";
import auctionListingRouter from "./routers/auctionListingRouter";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://tuniauctions.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// Simple GET route
app.get("/", (req, res) => {
  res.send("Hello, Server!");
});

const serverApp = http.createServer(app);
const io = new Server(serverApp, {
  cors: {
    origin: ["http://localhost:3000", "https://tuniauctions.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
  },
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auctionRoom", auctionRouter);
app.use("/api/auctionListing", auctionListingRouter);
const PORT = process.env.PORT || 80;
serverApp.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}!`);
});

const bidderNameSpace = io.of("/bidder");
const sellerNameSapce = io.of("/seller");
const auctionRoomNameSpace = io.of("/auctionRoom");
bidderNameSpaceLogic(bidderNameSpace);
sellerNameSpaceLogic(sellerNameSapce);
auctionRoomSocketLogic(auctionRoomNameSpace);
export { bidderNameSpace, sellerNameSapce, auctionRoomNameSpace };
