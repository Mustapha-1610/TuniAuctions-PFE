import {
  IBidder,
  IBidderFrontData,
} from "@/models/usersModels/types/bidderTypes";

export function returnBidderFrontData(bidder: IBidder) {
  const bidderData: IBidderFrontData = {
    email: bidder.email,
    fullName: bidder.fullName,
    profilePicture: bidder.profilePicture,
    balance: bidder.balance,
    auctionReferences: bidder.auctionReferences,
    deliveries: bidder.deliveries,
    adressPresets: bidder.adressPresets,
    transactions: bidder.transactions,
    notifications: bidder.notifications,
    gender: bidder.gender,
    socketId: bidder.socketId,
  };
  return bidderData;
}
