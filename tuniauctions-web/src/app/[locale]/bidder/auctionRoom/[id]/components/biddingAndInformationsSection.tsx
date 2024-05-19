"use client";
import { useEffect, useState } from "react";

import { AuctionListingType } from "@/models/types/auctionListing";
import Image from "next/image";
import auctionRoomSocket from "@/frontHelpers/auctionRoom/auctionRoomLogic";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import moment from "moment";
import { ObjectId } from "mongoose";
import "moment/locale/fr";
import "moment/locale/ar";

export interface auctionRoomData {
  remainingTime: number;
  onlineBidders: number;
  heighestBid: number;
  heighestBidder: string;
  bidderPicture: string;
  bidderId: string;
}
interface Props {
  auctionListing: AuctionListingType;
  bidderLocalStorageData: IBidderFrontData;
  setAuctionListing: (value: AuctionListingType) => void;
}
export interface newHighestBidType {
  bidderName: string;
  bid: number;
  submitTime: Date;
  bidderPicture: string;
  auctionId: ObjectId;
  bidderSocketId: ObjectId;
  bidderId: ObjectId;
}
export default function BiddingAndInformationsSection({
  auctionListing,
  bidderLocalStorageData,
  setAuctionListing,
}: Props) {
  const getDateFormat = (locale: string) => {
    switch (locale) {
      case "en":
        return "ddd, MMM D, YYYY [at] h:mm A";
      case "fr":
        return "ddd D MMM YYYY [à] HH:mm";
      case "ar":
        return "ddd، D MMM، YYYY [في] HH:mm";
      default:
        return "ddd, MMM D, YYYY [at] h:mm A"; // Default to English format
    }
  };
  const [selectedImage, setSelectedImage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [biddingRoomData, setBiddingRoomData] = useState<auctionRoomData>({
    remainingTime: 2000,
    onlineBidders: 0,
    heighestBid: auctionListing.openingBid,
    heighestBidder: "",
    bidderId: "",
    bidderPicture: "",
  });
  const [bid, setBid] = useState<number>(0);
  let intervalId: NodeJS.Timeout | null = null;

  function decreaseTimer() {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
      console.log("decreasing");
      setBiddingRoomData((prev) => ({
        ...prev,
        remainingTime: prev.remainingTime > 0 ? prev.remainingTime - 1 : 0,
      }));
    }, 1000);
  }
  useEffect(() => {
    decreaseTimer();
    auctionRoomSocket.on("userJoined", (data: any) => {
      console.log("test");
      setBiddingRoomData((prev) => ({
        ...prev,
        remainingTime: data.roomTimer,
        onlineBidders: data.participatingBidders,
        heighestBid: data.bid,
        heighestBidder: data.bidderName,
        bidderPicture: data.bidderPicture,
        bidderId: String(data.bidderId),
      }));
    });
    auctionRoomSocket.on("newHighestBidder", (data: newHighestBidType) => {
      console.log("new heighest bidder");
      setBiddingRoomData((prev) => ({
        ...prev,
        remainingTime: 45,
        heighestBid: data.bid,
        heighestBidder: data.bidderName,
        bidderPicture: data.bidderPicture,
        bidderId: String(data.bidderId),
      }));
    });
    auctionRoomSocket.on("adjustTimer", (data: number) => {
      console.log("adjusting");
      setBiddingRoomData((prev) => ({
        ...prev,
        remainingTime: data,
      }));
    });
    auctionRoomSocket.on("endAuction", (data: AuctionListingType) => {
      setAuctionListing(data);
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [bidderLocalStorageData]);

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
                  <div className="flex items-center">
                    <div className="text-3xl text-center whitespace-nowrap">
                      Highest Bidder : {biddingRoomData.heighestBidder}
                    </div>
                    {biddingRoomData.bidderPicture && (
                      <Image
                        src={biddingRoomData.bidderPicture}
                        alt="Bidder's Profile"
                        className="rounded-full w-10 h-10 mr-3"
                        height={70}
                        width={70}
                      />
                    )}
                  </div>
                  <div className="self-stretch mt-8 text-sm max-md:max-w-full">
                    Highest Bid : {biddingRoomData.heighestBid}
                  </div>
                  <div className="flex flex-col mt-6 max-w-full text-xl bg-white rounded-2xl  w-[620px]">
                    <div className="flex flex-col mt-6 max-w-full text-xl bg-white rounded-2xl w-[620px]">
                      <div className="flex items-center justify-center px-14 text-5xl font-bold text-center text-black whitespace-nowrap bg-white rounded-full border border-black border-solid h-[156px] stroke-[1px] w-[156px] max-md:px-5 max-md:text-4xl mx-auto">
                        {moment
                          .utc(biddingRoomData.remainingTime * 1000)
                          .format("mm:ss")}
                      </div>

                      <div className="flex gap-1 px-2 py-3 mt-6 text-base font-bold text-center text-black bg-white border-solid max-md:w-full">
                        <div>Minimum Bid :</div>
                        <div>{biddingRoomData.heighestBid * 1.04}</div>
                      </div>

                      <div className="flex flex-col gap-3 self-stretch text-base font-bold text-center text-black max-md:flex-wrap max-md:mt-6 max-md:max-w-full">
                        {errMessage && (
                          <p className="text-red-700">{errMessage}</p>
                        )}
                        <div className="flex justify-center">
                          <input
                            type="number"
                            min={0}
                            placeholder="Place Bid"
                            value={bid}
                            onChange={(e) => {
                              setBid(parseInt(e.target.value));
                            }}
                            className="px-4 py-2 w-full bg-zinc-300 rounded-md max-md:px-3 text-center"
                          />
                        </div>

                        <div className="flex justify-center">
                          <button
                            className={`px-6 py-4 whitespace-nowrap ${
                              biddingRoomData.bidderId ===
                              String(bidderLocalStorageData._id)
                                ? "bg-gray-400" // Disable button color
                                : "bg-slate-900" // Original button color
                            } w-fit max-md:px-5 text-white rounded-md`}
                            type="button"
                            disabled={
                              biddingRoomData.bidderId ===
                              String(bidderLocalStorageData._id)
                            }
                            onClick={() => {
                              if (
                                bid <=
                                bidderLocalStorageData.balance.activeBalance
                              ) {
                                if (bid > biddingRoomData.heighestBid * 1.04) {
                                  auctionRoomSocket.emit("submitNewBid", {
                                    bidderName: bidderLocalStorageData.fullName,
                                    bid,
                                    auctionId: auctionListing._id,
                                    submitTime: new Date(),
                                    bidderPicture:
                                      bidderLocalStorageData.profilePicture,
                                    bidderSocketId:
                                      bidderLocalStorageData.socketId,
                                    bidderId: bidderLocalStorageData._id,
                                  });
                                  setErrMessage("");
                                } else {
                                  setErrMessage(
                                    "Cant bid lower then the minimum bid"
                                  );
                                }
                              } else {
                                setErrMessage("Not Enough Balance");
                              }
                            }}
                          >
                            Submit
                          </button>
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
          <p>Loading</p>
        </>
      )}
    </>
  );
}
