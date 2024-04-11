"use client";

import { resDataType } from "@/serverHelpers/types";
import { useState } from "react";
import { useSignoutBidder } from "../../navbar/components/components/profileDropdownMenu";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";

interface Props {
  setSelectedBalanceComponent: (value: "balance" | "transactions") => void;
}
export default function AddBalance({ setSelectedBalanceComponent }: Props) {
  const [amount, setAmount] = useState<number>(0);
  const { setBidderLocalStorageData } = useBidderProfileStore();
  const signout = useSignoutBidder();
  async function handleIncreaseBalance(e: any) {
    e.preventDefault();
    if (amount > 0) {
      const res = await fetch("/api/bidder/increaseBalance", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });
      const resData: resDataType = await res.json();
      console.log(resData);
      if (resData.bidderFrontData) {
        setBidderLocalStorageData(resData.bidderFrontData);
        setSelectedBalanceComponent("transactions");
      } else {
        signout();
      }
    }
  }
  return (
    <>
      <div className="mt-6 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[52%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl font-bold tracking-tighter leading-10 text-black whitespace-nowrap max-md:mt-9 max-md:max-w-full">
              <div className="self-start ml-2.5">Amount</div>
              <div className="relative mt-3 max-md:max-w-full">
                <input
                  type="number"
                  className="shrink-0 px-4 bg-white rounded-md border-2 border-solid border-neutral-500 h-[54px] w-full"
                  min={0}
                  onChange={(e) => {
                    setAmount(parseInt(e.target.value));
                  }}
                  placeholder="0"
                />
                <span className="absolute inset-y-0 right-4 flex items-center">
                  $
                </span>
              </div>

              <div className="self-start mt-5 ml-2.5">Card Number</div>
              <input
                type="text"
                className="shrink-0 mt-3 px-4 bg-white rounded-md border-2 border-solid border-neutral-500 h-[54px] max-md:max-w-full"
                placeholder="Type here..."
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-32 text-xl font-bold tracking-tighter leading-10 text-black whitespace-nowrap max-md:mt-10">
              MM/YY
            </div>
            <input
              type="text"
              className="shrink-0 mt-3 px-4 bg-white rounded-md border-2 border-solid border-neutral-500 h-[54px]"
              placeholder="Type here..."
            />
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-32 text-xl font-bold tracking-tighter leading-10 text-black whitespace-nowrap max-md:mt-10">
              CVV
            </div>
            <input
              type="text"
              className="shrink-0 mt-3 px-4 bg-white rounded-md border-2 border-solid border-neutral-500 h-[54px]"
              placeholder="Type here..."
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm font-bold tracking-tighter leading-10 text-black max-md:mt-10 max-md:max-w-full">
        Tax : 10.00$
      </div>
      <hr className="mt-2.5 w-full border border-black border-solid stroke-[1px] stroke-black max-md:max-w-full" />
      <div className="flex flex-col self-end mt-3  max-w-full font-bold tracking-tighter w-[810px] max-md:mr-2.5 max-md:mb-10">
        <div className="self-end text-lg leading-10 text-right text-black">
          Total : 130.00$
        </div>
        <div className="flex gap-5 justify-between mt-2 max-w-full text-xl leading-10 whitespace-nowrap w-[460px] max-md:flex-wrap">
          <div className="flex-1 grow flex justify-center items-center px-16 py-2 text-black rounded-lg border-2 border-solid bg-zinc-400 border-neutral-600 max-md:px-5">
            <span
              className="inline-block align-middle"
              onClick={() => {
                setAmount(0);
              }}
            >
              Cancel
            </span>
          </div>
          <div
            className="flex-1 grow flex justify-center items-center px-16 py-2 text-white bg-blue-700 ml-2 rounded-md border-2 border-solid border-neutral-500 max-md:px-5 cursor-pointer"
            onClick={handleIncreaseBalance}
          >
            <span className="inline-block align-middle">Submit</span>
          </div>
        </div>
      </div>
    </>
  );
}
