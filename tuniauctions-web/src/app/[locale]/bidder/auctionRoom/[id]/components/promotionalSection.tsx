"use client";
import { AuctionListingType } from "@/models/types/auctionListing";

interface Props {
  auctionListing: AuctionListingType;
}
export default function PromotionalSection({ auctionListing }: Props) {
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match && match[1];
  };
  return (
    <>
      <div className="mt-7 w-full max-w-[1396px] max-md:max-w-full">
        <div
          className={`flex gap-5 max-md:flex-col max-md:gap-0 ${
            !("buyItNowSection" in auctionListing) ? "flex-col" : ""
          }`}
        >
          <div
            className={`flex flex-col w-[${
              !("buyItNowSection" in auctionListing) ? "100" : "56"
            }%] max-md:ml-0 max-md:w-full`}
          >
            {auctionListing.promotionalVideo && (
              <div className="flex flex-col grow px-8 py-6 w-full text-3xl text-center text-black bg-white border border-white border-solid max-md:px-5 max-md:max-w-full">
                <div className="self-center font-bold">Promotional Video</div>
                {auctionListing.promotionalVideo && (
                  <div className="mt-3.5 w-full aspect-[2.13] max-md:max-w-full border border-white border-solid">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                        auctionListing.promotionalVideo
                      )}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    ></iframe>
                  </div>
                )}
              </div>
            )}
          </div>

          {"buyItNowSection" in auctionListing && (
            <a
              className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full mt-12"
              href={auctionListing.buyItNowSection?.storeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center self-stretch px-1.5 pt-7 pb-5 my-auto w-full text-center text-black bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-bold">Buy It Now</div>
                <img
                  loading="lazy"
                  srcSet={auctionListing.buyItNowSection?.promotionalPicture}
                  className="mt-1 max-w-full aspect-[1.59] w-[253px]"
                />
                <div className="self-stretch px-14 pt-2 pb-3.5 mt-6 text-xl bg-white rounded-lg border border-white border-solid max-md:pr-6 max-md:pl-5 max-md:max-w-full">
                  {auctionListing.buyItNowSection?.promotionalDescription}
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
