import { Pricing } from "@/models/types/pricing";
import { IoMdClose } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
import Link from "next/link";
import React from "react";
import { useLocale } from "next-intl";

interface Props {
  pricing: Pricing;
}
export default function PricingBanner({ pricing }: Props) {
  const locale = useLocale();
  return (
    <React.Fragment key={pricing._id}>
      <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
        <div
          className={`flex flex-col items-start px-4 py-5 mx-auto w-full text-black whitespace-nowrap rounded-xl border border-black border-solid shadow-2xl max-md:mt-10 ${
            pricing.name === "Basic"
              ? "bg-gray-100" // Light gray for Basic
              : pricing.name === "Standard"
              ? "bg-blue-100" // Light blue for Standard
              : "bg-purple-100" // Light purple for Premium
          }`}
        >
          <div className="flex gap-5 justify-between items-start self-center max-w-full w-[269px]">
            <div className="flex flex-col self-end mt-5">
              <div className="text-2xl tracking-widest leading-8">
                {pricing.name}
              </div>
              <div className="mt-3.5 text-gl leading-5">
                {pricing.listingsCount > 0 &&
                  pricing.listingsCount + " Listings"}
              </div>
            </div>
            <div className="flex flex-col self-start">
              <div className="flex gap-2 justify-between">
                <div className="text-lg leading-7">$</div>
                <div className="text-3xl leading-7">
                  {pricing.price > 0 ? pricing.price : "Free"}
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 self-stretch mt-6 h-0.5 bg-black" />
          <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            Premotional Video : {pricing.videoLength} seconds
          </div>
          <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            Platform Fees : {pricing.platformFees}%
          </div>
          <div className="mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            Views Statistics
          </div>
          <div className="shrink-0 self-stretch mt-6 h-0.5 bg-black" />
          <div className="flex items-center mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            Gender Views Statistics
            {pricing.genderViews ? (
              <ImCheckmark className="ml-2" color="green" size={21} />
            ) : (
              <IoMdClose className="ml-2" color="red" size={23} />
            )}
          </div>
          <div className="flex items-center mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            Buy It Now Section
            {pricing.buyItNowSection ? (
              <ImCheckmark className="ml-2" color="green" size={21} />
            ) : (
              <IoMdClose className="ml-2" color="red" size={23} />
            )}
          </div>
          <div className="flex items-center mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            Featured Listing
            {pricing.featured ? (
              <ImCheckmark className="ml-2" color="green" size={21} />
            ) : (
              <IoMdClose className="ml-2" color="red" size={23} />
            )}
          </div>
          <div className="flex items-center mt-7 ml-5 text-base leading-7 max-md:ml-2.5">
            Promotional Socials Section
            {pricing.socialsSection ? (
              <ImCheckmark className="ml-2" color="green" size={21} />
            ) : (
              <IoMdClose className="ml-2" color="red" size={23} />
            )}
          </div>
          {pricing.name !== "Basic" && (
            <Link
              className="mx-auto mt-4 py-2 px-4 bg-black text-white rounded-md"
              href={"/" + locale + "/seller/checkout/" + pricing._id}
            >
              Purchase
            </Link>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
