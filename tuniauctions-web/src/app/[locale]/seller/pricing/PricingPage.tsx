import { Pricing } from "@/models/types/pricing";
import { useLocale } from "next-intl";
import Link from "next/link";
import PricingBanner from "./components/pricingBanner";
import React from "react";
interface Props {
  pricing: Pricing[];
}
export default function Pricing({ pricing }: Props) {
  const locale = useLocale();

  return (
    <>
      <div className="flex ml-2 overflow-hidden bg-white pt-16">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <div className="flex flex-col items-start px-11  pb-4 bg-white max-md:px-5">
            <div className="text-4xl leading-10 text-slate-900 tracking-[2.4px] max-md:max-w-full">
              Pricing
            </div>

            <div className="self-center mt-10 w-full max-w-[1340px] max-md:max-w-full">
              <Link
                href={"/" + locale + "/seller/checkout"}
                className="flex gap-5 max-lg:flex-col max-md:gap-0 max-lg:"
              >
                {pricing.map((value, index) => {
                  return (
                    <>
                      <React.Fragment key={index}>
                        <PricingBanner
                          name={value.name}
                          price={value.price}
                          key={index}
                        />
                      </React.Fragment>
                    </>
                  );
                })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
