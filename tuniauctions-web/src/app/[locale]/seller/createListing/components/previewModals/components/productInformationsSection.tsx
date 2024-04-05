"use client";
import { useEffect, useState } from "react";
import {
  basicAuctionListingPreviewType,
  premiumAuctionListingPreviewType,
  standardAuctionListingPreviewType,
} from "@/app/[locale]/seller/createListing/components/types";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiCancel, GiTakeMyMoney } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import moment from "moment";

interface Props {
  auctionListing:
    | basicAuctionListingPreviewType
    | standardAuctionListingPreviewType
    | premiumAuctionListingPreviewType;
  productPictures: FileList | null;
}
export default function ProductInformationsSection({
  auctionListing,
  productPictures,
}: Props) {
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState<string[]>([""]);
  useEffect(() => {
    const hanleLoadingImages = () => {
      if (productPictures) {
        const readerPromises: Promise<string>[] = [];
        for (let i = 0; i < productPictures.length; i++) {
          const reader = new FileReader();
          readerPromises.push(
            new Promise<string>((resolve) => {
              reader.onload = (e) => {
                resolve(e.target?.result as string);
              };
              reader.readAsDataURL(productPictures[i]);
            })
          );
        }
        Promise.all(readerPromises).then((dataUrls) => {
          dataUrls.reverse();
          setImages(dataUrls);
        });
      }
    };

    hanleLoadingImages();
  }, []);
  return (
    <>
      <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">
            {images && (
              <img
                loading="lazy"
                src={selectedImage || images[0]}
                className="grow w-fit object-contain aspect-[1] max-md:mt-10 max-md:max-w-full"
                alt="Product"
              />
            )}
            <div className="flex justify-center mt-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-12 h-12 mx-1 cursor-pointer rounded-full bg-gray-300"
                  onClick={() => {
                    setSelectedImage(images[index]);
                  }}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              ))}
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
                    {auctionListing.originalPrice}$
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
                    {auctionListing.openingBid}$
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
                    0/{auctionListing.minParticipatingBidders}
                  </div>
                </div>
                {/* table item */}
                <div className="flex gap-5 justify-between px-4 py-5  w-full whitespace-nowrap bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-2.5">
                    {auctionListing.guarentee.length > 0 ? (
                      <>
                        <FaRegCircleCheck
                          className="shrink-0  h-[54px] w-[42px]"
                          size={20}
                          color="black"
                        />
                      </>
                    ) : (
                      <>
                        <GiCancel
                          className="shrink-0  h-[54px] w-[42px]"
                          size={20}
                          color="black"
                        />
                      </>
                    )}
                    <div className="flex-auto my-auto">Guarantee</div>
                  </div>
                  {auctionListing.guarentee.length > 0 && (
                    <div className="my-auto text-right">
                      {auctionListing.guarentee.length}{" "}
                      {auctionListing.guarentee.period}
                    </div>
                  )}
                </div>
                <div className="z-10 justify-center items-center px-16 py-9 -mb-1 text-center text-white whitespace-nowrap rounded-none border border-black border-solid bg-gray-700 max-md:px-5 max-md:max-w-full">
                  Participate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
