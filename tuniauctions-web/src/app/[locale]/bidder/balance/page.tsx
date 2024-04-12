"use client";
import * as React from "react";
import AddBalance from "./components/addBalance";
import LockedHistory from "./components/lockedHistory";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import TransactionHistory from "./components/lockedHistory";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";

export default function MyComponent() {
  const { bidderLocalStorageData } = useBidderProfileStore();

  const { setSelectedBalanceComponent, selectedBalanceComponent } =
    useBidderNavigationStore();
  React.useEffect(() => {
    return () => {
      setSelectedBalanceComponent("balance");
    };
  }, []);
  return (
    <div className="flex justify-center items-center mt-8 px-16  max-md:px-5">
      <div className="flex flex-col py-16 w-full max-w-[1150px] max-md:max-w-full">
        <div className="text-3xl font-bold tracking-tighter text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
          Balance
        </div>
        <div className="flex flex-col px-4 mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between self-center max-w-full text-center whitespace-nowrap w-[955px] max-md:flex-wrap">
            <div className="flex flex-1 grow shrink-0 justify-center items-center px-16 py-3.5 rounded-lg border border-black border-solid basis-0 bg-zinc-200 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="self-center text-2xl font-bold tracking-tight text-red-600">
                  ${bidderLocalStorageData?.balance.activeBalance}
                </div>
                <div className="mt-2 text-sm font-bold leading-5 text-black">
                  Current balance
                </div>
              </div>
            </div>
            <div className="flex flex-1 grow shrink-0 justify-center items-center px-16 py-3.5 rounded-lg border border-black border-solid basis-0 bg-zinc-200 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="self-center text-2xl font-bold tracking-tight text-red-600">
                  ${bidderLocalStorageData?.balance.lockedBalance}
                </div>
                <div className="mt-2 text-sm font-bold leading-5 text-black">
                  Locked Balance
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-12 text-2xl font-bold tracking-tight text-center whitespace-nowrap text-neutral-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div
              onClick={() => {
                setSelectedBalanceComponent("balance");
              }}
              className={`grow cursor-pointer justify-center items-center px-16 py-4 rounded-lg border border-black border-solid w-fit max-md:px-5 max-md:max-w-full ${
                selectedBalanceComponent === "balance"
                  ? "bg-slate-900 text-white"
                  : "bg-white text-neutral-900"
              }`}
            >
              Add Balance
            </div>
            <div
              onClick={() => {
                setSelectedBalanceComponent("transactions");
              }}
              className={`grow cursor-pointer justify-center items-center px-16 py-4 rounded-lg border border-black border-solid w-fit max-md:px-5 max-md:max-w-full ${
                selectedBalanceComponent === "transactions"
                  ? "bg-slate-900 text-white"
                  : "bg-white text-neutral-900"
              }`}
            >
              View History
            </div>
          </div>
          {selectedBalanceComponent === "balance" ? (
            <AddBalance
              setSelectedBalanceComponent={setSelectedBalanceComponent}
            />
          ) : (
            selectedBalanceComponent === "transactions" && (
              <TransactionHistory />
            )
          )}
        </div>
      </div>
    </div>
  );
}
