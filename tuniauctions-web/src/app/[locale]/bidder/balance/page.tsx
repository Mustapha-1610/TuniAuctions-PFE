"use client";
import * as React from "react";
import AddBalance from "./components/addBalance";
import LockedHistory from "./components/lockedHistory";

export default function MyComponent() {
  const [displayedComponent, setDisplayedComponent] = React.useState<any>(
    <AddBalance />
  );
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
                  $1000
                </div>
                <div className="mt-2 text-sm font-bold leading-5 text-black">
                  Current balance
                </div>
              </div>
            </div>
            <div className="flex flex-1 grow shrink-0 justify-center items-center px-16 py-3.5 rounded-lg border border-black border-solid basis-0 bg-zinc-200 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="self-center text-2xl font-bold tracking-tight text-red-600">
                  $0
                </div>
                <div className="mt-2 text-sm font-bold leading-5 text-black">
                  Locked Balance
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-12 text-2xl font-bold tracking-tight text-center whitespace-nowrap text-neutral-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div
              onClick={() => setDisplayedComponent(<AddBalance />)}
              className="grow cursor-pointer justify-center items-center px-16 py-4 bg-slate-900 text-white rounded-lg border border-black border-solid w-fit max-md:px-5 max-md:max-w-full"
            >
              Add Balance
            </div>
            <div
              onClick={() => setDisplayedComponent(<LockedHistory />)}
              className="grow cursor-pointer justify-center items-center px-16 py-4 bg-white rounded-lg border border-black border-solid w-fit max-md:px-5 max-md:max-w-full"
            >
              View History
            </div>
          </div>
          {displayedComponent}
        </div>
      </div>
    </div>
  );
}
