import expreess from "express";
import * as auctionListingController from "../../src/controllers/auctionListing";
const auctionListingRouter = expreess.Router();

auctionListingRouter.post("/create/basic", auctionListingController.basic);
export default auctionListingRouter;
