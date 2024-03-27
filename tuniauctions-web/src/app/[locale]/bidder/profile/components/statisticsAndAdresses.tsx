"use client";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { BsThreeDots } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";

export default function StatisticsAndAdresses() {
  const { bidderLocalStorageData } = useBidderProfileStore();

  return (
    <>
      <div className=" mr-12 pt-12 max-w-full w-[960px] max-md:mr-2.5">
        <div className="flex flex-row flex-1 mt-6 mb-8  max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl max-md:max-w-full font-bold text-black">
            Statistics
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-bold whitespace-nowrap max-md:mt-10">
              <div className="flex justify-center items-center px-16 py-10 rounded-3xl bg-slate-200 max-md:px-5">
                <div className="flex flex-col">
                  <div className="flex gap-3 flex-rows text-base text-black">
                    Upcoming Auctions <BsThreeDots size={30} />
                  </div>
                  <div className="self-center mt-4 text-5xl text-red-600 max-md:text-4xl">
                    {bidderLocalStorageData?.auctionReferences.upcoming.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-bold whitespace-nowrap max-md:mt-10">
              <div className="flex justify-center items-center px-16 py-10 rounded-3xl bg-slate-200 max-md:px-5">
                <div className="flex flex-col">
                  <div className="flex gap-3 flex-rows text-base text-black">
                    Pending Deliveries <MdPendingActions size={30} />
                  </div>
                  <div className="self-center mt-4 text-5xl text-red-600 max-md:text-4xl">
                    {bidderLocalStorageData?.deliveries.pending.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pr-20 pl-4 mt-4 max-w-full w-[1062px] max-md:flex-wrap max-md:pr-5">
        <div className="text-2xl font-bold text-neutral-900">Addresses</div>
        <div className="text-4xl font-medium text-neutral-900">+</div>
      </div>
      <div className="flex gap-5 justify-between py-3 pr-20 pl-4 mt-4 max-w-full bg-slate-200 w-[1062px] max-md:flex-wrap max-md:pr-5">
        <div className="flex gap-4 pr-20 max-md:flex-wrap">
          <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a85129d38bcfe9aaf0389dc22f0cd94496caaa68f9e1cca1396192a58cb65b3?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="w-6 aspect-square"
            />
          </div>
          <div className="flex flex-col justify-center my-auto whitespace-nowrap leading-[150%]">
            <div className="text-base font-medium text-neutral-900">
              Lily Williams
            </div>
            <div className="text-sm text-slate-500">123 Main St. 22889844</div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-7 py-1.5 my-auto text-sm font-medium leading-5 whitespace-nowrap rounded-xl bg-slate-200 text-neutral-900 max-md:px-5">
          <div className="justify-center bg-slate-200">Edit</div>
        </div>
      </div>
    </>
  );
}
