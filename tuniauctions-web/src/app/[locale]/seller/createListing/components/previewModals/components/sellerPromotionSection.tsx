"use client";
import {
  basicAuctionListingPreviewType,
  premiumAuctionListingPreviewType,
  standardAuctionListingPreviewType,
} from "../../types";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
interface Props {
  auctionListing:
    | basicAuctionListingPreviewType
    | standardAuctionListingPreviewType
    | premiumAuctionListingPreviewType;
}
export default function SellerPromotionSection({ auctionListing }: Props) {
  const { sellerLocaleStorageData } = useSellerProfileStore();

  return (
    <>
      {sellerLocaleStorageData && (
        <div className="flex flex-col pb-2.5 mt-7 w-full bg-white rounded-2xl border border-black border-solid max-w-[1600px] max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col items-center px-16 pt-16 w-full min-h-[250px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet={sellerLocaleStorageData?.coverPicture}
              className="object-contain absolute inset-0 size-full rounded rounded-lg"
            />
            <img
              loading="lazy"
              srcSet={sellerLocaleStorageData?.businessPicture}
              className="z-10 mb-0 max-w-full aspect-[1.03] w-[170px] max-md:mb-2.5 rounded rounded-xl"
            />
          </div>

          <div className="self-center mt-8 text-xl text-center text-black max-md:mt-10">
            {sellerLocaleStorageData?.name}
          </div>
          {"socialsSection" in auctionListing && (
            <>
              <div className="flex gap-5 justify-between self-center mt-8 max-md:flex-wrap">
                {auctionListing.socialsSection.facebook && (
                  <a
                    href={auctionListing.socialsSection.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full h-[54px] w-[51px]"
                  >
                    <FaFacebook
                      className="mx-2 cursor-pointer text-gray-500 hover:text-blue-500 transition-colors duration-300"
                      size="full"
                    />
                  </a>
                )}
                {auctionListing.socialsSection.instagram && (
                  <a
                    href={auctionListing.socialsSection.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full h-[54px] w-[51px] "
                  >
                    <FaInstagram
                      className="mx-2 cursor-pointer text-gray-500 hover:text-pink-500 transition-colors duration-300"
                      size="full"
                    />
                  </a>
                )}
                {auctionListing.socialsSection.tiktok && (
                  <a
                    href={auctionListing.socialsSection.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full h-[54px] w-[51px]"
                  >
                    <FaTiktok
                      className="mx-2 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300"
                      size="full"
                    />
                  </a>
                )}

                {auctionListing.socialsSection.twitter && (
                  <a
                    href={auctionListing.socialsSection.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full h-[54px] w-[51px]"
                  >
                    <FaTwitter
                      className="mx-2 cursor-pointer text-gray-500 hover:text-blue-400 transition-colors duration-300"
                      size="full"
                    />
                  </a>
                )}
                {auctionListing.socialsSection.youtube && (
                  <a
                    href={auctionListing.socialsSection.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full h-[54px] w-[51px]"
                  >
                    <FaYoutube
                      className="mx-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors duration-300"
                      size="full"
                    />
                  </a>
                )}
              </div>
            </>
          )}
          <div className="z-10 px-4 pb-12 mx-6 mt-7 text-sm text-center text-black bg-white rounded-xl border border-white border-solid max-md:mr-2.5 max-md:max-w-full">
            {sellerLocaleStorageData?.description}
          </div>
        </div>
      )}
    </>
  );
}
