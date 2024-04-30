"use client";

import { AuctionListingType } from "@/models/types/auctionListing";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  auctionRoomData,
  newHighestBidType,
} from "../../bidder/auctionRoom/[id]/components/biddingAndInformationsSection";
import moment from "moment";
import auctionRoomSocket from "@/frontHelpers/auctionRoom/auctionRoomLogic";
import { Modal } from "antd";

interface Props {
  auctionListing: AuctionListingType;
  isAuctionRoomOpen: boolean;
  setAuctionRoomState: (value: boolean) => void;
  setAuctionListing: (value: AuctionListingType | undefined) => void;
}
export default function AdminBiddingRoomModal({
  auctionListing,
  isAuctionRoomOpen,
  setAuctionRoomState,
  setAuctionListing,
}: Props) {
  const [selectedImage, setSelectedImage] = useState("");
  const [biddingRoomData, setBiddingRoomData] = useState<auctionRoomData>({
    remainingTime: 2000,
    onlineBidders: 0,
    heighestBid: auctionListing.openingBid,
    heighestBidder: "",
    bidderId: "",
    bidderPicture: "",
  });
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
    auctionRoomSocket.emit("adminJoined", auctionListing._id);
    auctionRoomSocket.on("userJoined", (data: any) => {
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
      setBiddingRoomData((prev) => ({
        ...prev,
        remainingTime: data,
      }));
    });
    auctionRoomSocket.on("endAuction", (data: AuctionListingType) => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setAuctionListing(undefined);
      setAuctionRoomState(false);
    });
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
  return (
    <>
      <Modal
        title=""
        centered
        open={isAuctionRoomOpen}
        width={1650}
        footer={null}
        onCancel={() => (
          setAuctionRoomState(false), setAuctionListing(undefined)
        )}
      >
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
                        <img
                          src={biddingRoomData.bidderPicture}
                          alt="Bidder's Profile"
                          className="rounded-full w-10 h-10 mr-3"
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
                        <div className="flex gap-1 px-2 py-3 mt-6 text-base font-bold text-center text-black bg-white border-solid max-md:w-full">
                          <div>Participating Bidders :</div>
                          <div>{biddingRoomData.onlineBidders}</div>
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
      </Modal>
    </>
  );
}
