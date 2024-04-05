import {
  basicAuctionListingPreviewType,
  premiumAuctionListingPreviewType,
  standardAuctionListingPreviewType,
} from "@/app/[locale]/seller/createListing/components/types";
interface Props {
  setAuctionListingForm: (prev: any) => void;
  auctionListingForm:
    | basicAuctionListingPreviewType
    | standardAuctionListingPreviewType
    | premiumAuctionListingPreviewType;
}
export default function OriginalAndStartingBiddingPriceWithMinParticipatingBiddersSection({
  auctionListingForm,
  setAuctionListingForm,
}: Props) {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
          <label
            htmlFor="stock1"
            className="block text-sm font-medium text-gray-700"
          >
            Original Price
          </label>
          <input
            type="number"
            id="stock1"
            name="originalPrice"
            onChange={(e) => {
              setAuctionListingForm((prev: any) => ({
                ...prev,
                originalPrice: parseInt(e.target.value),
              }));
            }}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="stock2"
            className="block text-sm font-medium text-gray-700"
          >
            Opening Bid
          </label>
          <input
            type="number"
            id="stock2"
            name="openingBid"
            onChange={(e) => {
              setAuctionListingForm((prev: any) => ({
                ...prev,
                openingBid: parseInt(e.target.value),
              }));
            }}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="regularPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Minimum Participating Bidders
        </label>
        <input
          type="number"
          id="regularPrice"
          name="minParticipatingBidders"
          min={0}
          value={auctionListingForm.minParticipatingBidders}
          className="mt-1 p-2 w-52 border border-gray-300 rounded-md "
          onChange={(e) => {
            setAuctionListingForm((prev: any) => ({
              ...prev,
              minParticipatingBidders: parseInt(e.target.value),
            }));
          }}
        />
      </div>
    </>
  );
}
