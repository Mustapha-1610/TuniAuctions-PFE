import expreess from "express";
import * as auctionController from "../../src/controllers/auctionRoom";
const auctionRouter = expreess.Router();

auctionRouter.post("/start", auctionController.start);
auctionRouter.post("/end", auctionController.end);
export default auctionRouter;
