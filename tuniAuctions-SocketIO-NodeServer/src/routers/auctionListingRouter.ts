import expreess from "express";
import * as auctionListingController from "../../src/controllers/auctionListing";
const auctionListingRouter = expreess.Router();

auctionListingRouter.post("/create/basic", auctionListingController.basic);
auctionListingRouter.post(
  "/create/standard",
  auctionListingController.standard
);
auctionListingRouter.post("/create/premium", auctionListingController.premium);
export default auctionListingRouter;
