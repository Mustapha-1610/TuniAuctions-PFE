"use client";
import { useState } from "react";

import { AuctionListingType } from "@/models/types/auctionListing";
import Image from "next/image";

interface Props {
  auctionListing: AuctionListingType;
}
export default function BiddingAndInformationsSection({
  auctionListing,
}: Props) {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <>
      {auctionListing ? (
        <>
          <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">
                {auctionListing.productPictures && (
                  <Image
                    loading="lazy"
                    src={selectedImage || auctionListing.productPictures[0]}
                    className="grow w-fit object-contain aspect-[1] max-md:mt-10 max-md:max-w-full"
                    alt="Product"
                    width={400}
                    height={200}
                    quality={85}
                  />
                )}
                <div className="flex justify-center mt-4">
                  {auctionListing.productPictures && (
                    <>
                      {auctionListing.productPictures.map((image, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 mx-1 cursor-pointer rounded-full bg-gray-300"
                          onClick={() => {
                            setSelectedImage(
                              auctionListing.productPictures![index]
                            );
                          }}
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center self-stretch pt-9 pr-6 pb-6 pl-1.5 my-auto w-full font-bold text-black bg-white border border-white border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl text-center whitespace-nowrap">
                    {auctionListing.title}
                  </div>
                  <div className="self-stretch mt-8 text-sm max-md:max-w-full">
                    {auctionListing.description}
                  </div>
                  <div className="flex flex-col mt-6 max-w-full text-xl bg-white rounded-2xl  w-[620px]">
                    <div className="flex flex-col mt-6 max-w-full text-xl bg-white rounded-2xl w-[620px]">
                      <div className="flex items-center justify-center px-14 text-5xl font-bold text-center text-black whitespace-nowrap bg-white rounded-full border border-black border-solid h-[156px] stroke-[1px] w-[156px] max-md:px-5 max-md:text-4xl mx-auto">
                        4:49
                      </div>

                      <div className="flex gap-1 px-2 py-3 mt-6 text-base font-bold text-center text-black bg-white border-solid max-md:w-full">
                        <div>Balance:</div>
                        <div>$300</div>
                      </div>

                      <div className="flex flex-col gap-3 self-stretch text-base font-bold text-center text-black max-md:flex-wrap max-md:mt-6 max-md:max-w-full">
                        <div className="flex justify-center">
                          <input
                            type="number"
                            placeholder="Place Bid"
                            className="px-4 py-2 w-full bg-zinc-300 rounded-md max-md:px-3 text-center"
                          />
                        </div>

                        <div className="flex justify-center">
                          <div className="px-6 py-4 whitespace-nowrap bg-slate-900 w-fit max-md:px-5 text-white rounded-md">
                            Submit
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-base font-bold text-center text-black whitespace-nowrap">
                        Bidding History
                      </div>
                      <div className="flex overflow-hidden relative flex-col justify-center self-stretch py-1 border border-black border-solid leading-[150%] min-h-[141px] stroke-[1px] stroke-black max-md:max-w-full">
                        <div className="flex relative flex-col px-1.5 py-1  max-md:max-w-full">
                          <div className="flex gap-5 justify-between py-1.5 w-full border border-white border-solid max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-4 text-base font-medium whitespace-nowrap text-neutral-900">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="shrink-0 w-14 aspect-square"
                              />
                              <div className="my-auto">$1,300</div>
                            </div>
                            <div className="flex-auto my-auto text-sm text-slate-500">
                              12/19/2023, 6:45 PM
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between py-1.5 w-full border border-white border-solid max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-4 text-base font-medium whitespace-nowrap text-neutral-900">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59bbb7e267598cc3586408b1167e6f31f8ff5673e27b2720f95f85eae4813fe4?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                                className="shrink-0 w-14 aspect-square"
                              />
                              <div className="my-auto">$1,300</div>
                            </div>
                            <div className="flex-auto my-auto text-sm text-slate-500">
                              12/19/2023, 6:45 PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>test</p>
        </>
      )}
    </>
  );
}
