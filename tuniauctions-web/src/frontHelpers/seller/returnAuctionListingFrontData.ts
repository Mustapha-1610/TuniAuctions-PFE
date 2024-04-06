import {
  AuctionListingType,
  sellerAuctionListingFrontData,
} from "@/models/types/auctionListing";
import {
  ISeller,
  ISellerFrontData,
} from "@/models/usersModels/types/sellerTypes";

export function returnSellerCreatedListingsFrontData(
  auctionListing: AuctionListingType[]
) {
  let frontAuctionListingData: sellerAuctionListingFrontData[] = [];
  if (auctionListing) {
    auctionListing.map((value: AuctionListingType) => {
      frontAuctionListingData.push({
        title: value.title,
        description: value.description,
        category: value.category,
        minParticipatingBidders: value.minParticipatingBidders,
        originalPrice: value.originalPrice,
        platformFees: value.platformFees,
        promotionalVideo: value.promotionalVideo,
        startingDate: value.startingDate,
        status: value.status,
        biddingRoomId: value.biddingRoomId,
        endDate: value.endDate,
        featured: value.featured,
        genderViews: value.genderViews,
        guarantee: value.guarantee,
        listingType: value.listingType,
        openingBid: value.openingBid,
        productPictures: value.productPictures,
        totalViews: value.totalViews,
        uniqueViews: value.uniqueViews,
        _id: value._id,
        participatingBidders: value.participatingBidders,
        winningBidder: value.winningBidder,
      });
    });
  }

  return frontAuctionListingData;
}
