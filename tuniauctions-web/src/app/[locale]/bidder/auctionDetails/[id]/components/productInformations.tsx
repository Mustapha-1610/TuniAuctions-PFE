"use client";
import { useEffect, useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiCancel, GiTakeMyMoney } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import moment from "moment";
import { AuctionListingType } from "@/models/types/auctionListing";
import Image from "next/image";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import ConfirmParticipartionModal from "./confirmParticipationModal";
import ConfirmUnparticipationModal from "./confirmUnparticipationModal";
import { useNavbarState } from "@/helpers/store/general/navbarState";
import Link from "next/link";
import { useLocale } from "next-intl";

interface Props {
  auctionListing: AuctionListingType;
  setAuctionListing: (item: AuctionListingType) => void;
}
export default function ProductInformations({
  auctionListing,
  setAuctionListing,
}: Props) {
  const { bidderLocalStorageData } = useBidderProfileStore();
  const [selectedImage, setSelectedImage] = useState("");
  const [isConfirmParticipationModalOpen, setIsComfirmParticipationModal] =
    useState<boolean>(false);
  const [isConfirmUnparticipationModalOpen, setIsConfirmUnparticipationModal] =
    useState<boolean>(false);
  const { setLoginModalState } = useNavbarState();
  const locale = useLocale();
  useEffect(() => {
    console.log(bidderLocalStorageData);
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
                  <div className="text-3xl text-center whitespace-nowrap">
                    {auctionListing.title}
                  </div>
                  <div className="self-stretch mt-8 text-sm max-md:max-w-full">
                    {auctionListing.description}
                  </div>
                  <div className="flex flex-col mt-6 max-w-full text-xl bg-white rounded-2xl  w-[620px]">
                    <div className="flex gap-5 justify-between px-4 py-5  w-full whitespace-nowrap bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-2.5">
                        <FaMoneyBillWave
                          className="shrink-0  h-[54px] w-[42px]"
                          size={20}
                          color="black"
                        />
                        <div className="flex-auto my-auto">Original price</div>
                      </div>
                      <div className="my-auto text-right">
                        {auctionListing.originalPrice}
                      </div>
                    </div>
                    {/* table item */}
                    <div className="flex gap-5 justify-between px-4 py-5  w-full whitespace-nowrap bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-2.5">
                        <GiTakeMyMoney
                          className="shrink-0  h-[54px] w-[42px]"
                          size={40}
                          color="black"
                        />
                        <div className="flex-auto my-auto">Opening Bid</div>
                      </div>
                      <div className="my-auto text-right">
                        {auctionListing.openingBid > 0 ? (
                          <>{auctionListing.openingBid}$</>
                        ) : (
                          <>Free !</>
                        )}
                      </div>
                    </div>
                    {/* table item */}
                    <div className="flex gap-5 justify-between px-4 py-5  w-full whitespace-nowrap bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-2.5">
                        <LuCalendarDays
                          className="shrink-0  h-[54px] w-[42px]"
                          size={20}
                          color="black"
                        />
                        <div className="flex-auto my-auto">Starting Date</div>
                      </div>
                      <div className="my-auto text-right">
                        <p>
                          {moment(auctionListing.startingDate).format(
                            "MMMM DD, YYYY HH:mm"
                          )}
                        </p>
                      </div>
                    </div>
                    {/* table item */}
                    <div className="flex gap-5 justify-between px-4 py-5  w-full whitespace-nowrap bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-2.5">
                        <MdOutlineGroups
                          className="shrink-0  h-[54px] w-[42px]"
                          size={20}
                          color="black"
                        />
                        <div className="flex-auto my-auto">Participants</div>
                      </div>
                      <div className="my-auto text-right">
                        {auctionListing.participatingBidders.length +
                          " / " +
                          auctionListing.minParticipatingBidders}
                      </div>
                    </div>
                    {/* table item */}
                    <div className="flex gap-5 justify-between px-4 py-5  w-full whitespace-nowrap bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-2.5">
                        {auctionListing.guarantee!.startsWith("0") ? (
                          <>
                            <GiCancel
                              className="shrink-0  h-[54px] w-[42px]"
                              size={20}
                              color="black"
                            />
                          </>
                        ) : (
                          <>
                            <FaRegCircleCheck
                              className="shrink-0  h-[54px] w-[42px]"
                              size={20}
                              color="black"
                            />
                          </>
                        )}
                        <div className="flex-auto my-auto">Guarantee</div>
                      </div>
                      {auctionListing.guarantee?.startsWith("0") ? (
                        <>
                          <div className="my-auto text-right">No Gurantee</div>
                        </>
                      ) : (
                        <>
                          <div className="my-auto text-right">
                            {auctionListing?.guarantee}
                          </div>
                        </>
                      )}
                    </div>

                    {bidderLocalStorageData != null ? (
                      <>
                        {auctionListing.participatingBidders.find(
                          (value) =>
                            value.bidderId === bidderLocalStorageData._id
                        ) ? (
                          <>
                            {auctionListing.status === "Pending Start" ? (
                              <>
                                <div
                                  className="z-10 justify-center items-center px-16 py-9 -mb-1 text-center text-white whitespace-nowrap rounded-none border border-black border-solid bg-red-700 cursor-pointer max-md:px-5 max-md:max-w-full"
                                  onClick={() => {
                                    setIsConfirmUnparticipationModal(true);
                                  }}
                                >
                                  Cancel Participation
                                </div>
                              </>
                            ) : (
                              auctionListing.status == "Ongoing" && (
                                <>
                                  <Link
                                    className="z-10 justify-center items-center px-16 py-9 -mb-1 text-center text-white whitespace-nowrap rounded-none border border-black border-solid bg-green-700 cursor-pointer max-md:px-5 max-md:max-w-full"
                                    href={`/${locale}/bidder/auctionRoom/${auctionListing._id}`}
                                  >
                                    Join
                                  </Link>
                                </>
                              )
                            )}
                          </>
                        ) : (
                          <div
                            className="z-10 justify-center items-center px-16 py-9 -mb-1 text-center text-white whitespace-nowrap rounded-none border border-black border-solid bg-gray-700 cursor-pointer max-md:px-5 max-md:max-w-full"
                            onClick={() => {
                              setIsComfirmParticipationModal(true);
                            }}
                          >
                            <span>Participate</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {" "}
                        <div
                          className="z-10 justify-center items-center px-16 py-9 -mb-1 text-center text-white whitespace-nowrap rounded-none border border-black border-solid bg-gray-700 cursor-pointer max-md:px-5 max-md:max-w-full"
                          onClick={() => {
                            setLoginModalState();
                          }}
                        >
                          <span>Participate</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isConfirmParticipationModalOpen && (
            <ConfirmParticipartionModal
              setAuctionListing={setAuctionListing}
              auctionListing={auctionListing}
              isConfirmParticipationModalOpen={isConfirmParticipationModalOpen}
              setIsComfirmParticipationModal={setIsComfirmParticipationModal}
            />
          )}
          {isConfirmUnparticipationModalOpen && (
            <ConfirmUnparticipationModal
              setAuctionListing={setAuctionListing}
              auctionListing={auctionListing}
              isConfirmUnarticipationModalOpen={
                isConfirmUnparticipationModalOpen
              }
              setIsComfirmUnparticipationModal={
                setIsConfirmUnparticipationModal
              }
            />
          )}
        </>
      ) : (
        <>
          <p>test</p>
        </>
      )}
    </>
  );
}
