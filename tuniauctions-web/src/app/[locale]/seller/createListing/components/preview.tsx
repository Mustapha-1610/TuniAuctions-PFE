"use client";
import { Modal } from "antd";
import { auctionListingFormType, pictureFiles } from "./types";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMoneyBillWave,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import moment from "moment";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { GiCancel } from "react-icons/gi";

interface Props {
  isPreviewModalOpen: boolean;
  setPreviewModalOpen: (isPreviewModalOpen: boolean) => void;
  auctionListing: auctionListingFormType;
  picture: pictureFiles;
}
interface images {
  promotionalImage: string;
  productImages: string[];
}
export default function PreviewModal({
  isPreviewModalOpen,
  setPreviewModalOpen,
  picture,
  auctionListing,
}: Props) {
  const [images, setImages] = useState<images>({
    promotionalImage: "",
    productImages: [],
  });
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match && match[1];
  };

  useEffect(() => {
    const hanleLoadingImages = () => {
      console.log(picture);
      const promotionalImageFile = picture.promotionalPicture;
      const productPictures = picture.productPictures;
      if (promotionalImageFile) {
        const reader = new FileReader();

        reader.readAsDataURL(promotionalImageFile);
        reader.onload = (e) => {
          setImages((prev) => ({
            ...prev,
            promotionalImage: e.target?.result as string,
          }));
        };
      }
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
          setImages((prev) => ({
            ...prev,
            productImages: dataUrls,
          }));
        });
      }
      console.log(auctionListing);
    };

    hanleLoadingImages();
  }, []);
  const { sellerLocaleStorageData } = useSellerProfileStore();
  return (
    <>
      <>
        <Modal
          title=""
          centered
          open={isPreviewModalOpen}
          width={1650}
          footer={null}
          onCancel={() => setPreviewModalOpen(false)}
        >
          <div className="flex flex-col items-center px-20 mt-6 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
            <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">
                  {images.productImages && (
                    <img
                      loading="lazy"
                      srcSet={images.productImages[2]}
                      className="grow w-fit object-cover aspect-[1] max-md:mt-10 max-md:max-w-full"
                    />
                  )}
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
                          <div className="flex-auto my-auto">Orignal price</div>
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
                            {auctionListing.guarentee.length +
                              " " +
                              auctionListing.guarentee.period}
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
            <div className="mt-7 w-full max-w-[1396px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-8 py-6 w-full text-3xl text-center text-black bg-white border border-white border-solid max-md:px-5 max-md:max-w-full">
                    <div className="self-center">Promotional Video</div>
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
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center self-stretch px-1.5 pt-7 pb-5 my-auto w-full text-center text-black bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
                    <div className="text-3xl">Buy It Now</div>
                    <img
                      loading="lazy"
                      srcSet={images.promotionalImage}
                      className="mt-1 max-w-full aspect-[1.59] w-[253px]"
                    />
                    <div className="self-stretch px-14 pt-2 pb-3.5 mt-6 text-xl bg-white rounded-lg border border-white border-solid max-md:pr-6 max-md:pl-5 max-md:max-w-full">
                      {auctionListing.buyItNowSection.promotionalDescription}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-2.5 mt-7 w-full bg-white rounded-2xl border border-black border-solid max-w-[1600px] max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col items-center px-16 pt-10 w-full min-h-[189px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={sellerLocaleStorageData?.coverPicture}
                  className="object-cover absolute inset-0 size-full rounded rounded-lg"
                />
                <img
                  loading="lazy"
                  srcSet={sellerLocaleStorageData?.businessPicture}
                  className="z-10 mb-0 max-w-full aspect-[1.03] w-[225px] max-md:mb-2.5 rounded rounded-lg"
                />
              </div>
              <div className="self-center mt-8 text-xl text-center text-black max-md:mt-10">
                {sellerLocaleStorageData?.name}
              </div>
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
              <div className="z-10 px-4 pb-12 mx-6 mt-7 text-sm text-center text-black bg-white rounded-xl border border-white border-solid max-md:mr-2.5 max-md:max-w-full">
                {sellerLocaleStorageData?.description}
              </div>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
}
