import {
  ISeller,
  ISellerFrontData,
} from "@/models/usersModels/types/sellerTypes";

export function returnSellerFrontData(seller: ISeller) {
  const sellerFrontData: ISellerFrontData = {
    name: seller.name,
    description: seller.description,
    businessPicture: seller.businessPicture,
    coverPicture: seller.coverPicture,
    location: seller.location,
    createdAuctions: seller.createdAuctions,
    earnnings: seller.earnnings,
    platformFees: seller.platformFees,
    packageCount: seller.packageCount,
    deliveries: seller.deliveries,
    strikes: seller.strikes,
    email: seller.email,
    refreshToken: seller.refreshToken,
    notifications: seller.notifications.reverse(),
    transactions: seller.transactions.reverse(),
    _id: seller._id,
    auctionEarnings: seller.auctionEarnings,
    socketId: seller.socketId,
    reviews: seller.reviews,
  };
  return sellerFrontData;
}
