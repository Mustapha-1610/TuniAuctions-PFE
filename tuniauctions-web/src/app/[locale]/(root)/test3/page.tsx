import * as React from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiAuctionLine } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";

export default function MyComponent() {
  return (
    <div className="flex pt-20 flex-col justify-center">
      <div className="flex justify-center items-center px-16 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-end  pl-3.5 w-full border border-white border-solid max-w-[1320px] max-md:max-w-full">
          <div className="flex z-10 gap-10 justify-between items-start self-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex flex-col mt-12 text-sm font-medium leading-5 whitespace-nowrap basis-0 text-neutral-900 max-md:mt-10">
              <div className="justify-center items-start py-2 pr-16 pl-3 rounded-xl bg-slate-200 max-md:pr-5">
                Personal Information
              </div>
              <div className="justify-center items-start py-2 pr-16 pl-3 mt-2 bg-white max-md:pr-5">
                Notifications
              </div>
              <div className="self-start mt-6 ml-3 max-md:ml-2.5">Address</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
              className="shrink-0 mt-11 max-w-full aspect-[0.96] w-[169px] max-md:mt-10"
            />
            <div className="flex flex-col flex-1 mt-20 font-bold text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl leading-5 max-md:max-w-full">
                Mustapha Talbi
              </div>
              <div className="flex gap-5 justify-between mt-3 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto text-base leading-5">
                  Mustapha.talbi55@gmail.com
                </div>
                <div className="justify-center px-12 py-4 text-sm tracking-wide leading-5 rounded-3xl bg-slate-200 max-md:px-5">
                  Edit
                </div>
              </div>
            </div>
          </div>

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
                        5
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center px-16 py-10 mt-9 rounded-3xl bg-slate-200 max-md:px-5">
                    <div className="flex flex-col">
                      <div className="flex gap-3 flex-rows text-base text-black">
                        Deliveries Pending Location Data{" "}
                        <MdPendingActions size={30} />
                      </div>
                      <div className="self-center mt-4 text-5xl text-red-600 max-md:text-4xl">
                        5
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
                        Total Participated Auctions <RiAuctionLine size={30} />
                      </div>
                      <div className="self-center mt-4 text-5xl text-red-600 max-md:text-4xl">
                        5
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center px-16 py-10 mt-9 rounded-3xl bg-slate-200 max-md:px-5">
                    <div className="flex flex-col">
                      <div className="flex gap-3 flex-rows text-base text-black">
                        Deliveries Pending Arrival <GrDeliver size={30} />
                      </div>
                      <div className="self-center mt-4 text-5xl text-red-600 max-md:text-4xl">
                        5
                      </div>
                    </div>
                  </div>

                  <div className="self-end mt-10 mr-16 text-4xl tracking-tight leading-7 text-black max-md:mr-2.5">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between py-3 pr-20 pl-4 mt-4 max-w-full bg-slate-50 w-[1062px] max-md:flex-wrap max-md:pr-5">
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
                <div className="text-sm text-slate-500">123 Main St.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-7 py-1.5 my-auto text-sm font-medium leading-5 whitespace-nowrap rounded-xl bg-slate-200 text-neutral-900 max-md:px-5">
              <div className="justify-center bg-slate-200">Edit</div>
            </div>
          </div>

          <div className="flex gap-5 justify-between py-3 pr-20 pl-4 max-w-full bg-slate-50 w-[1062px] max-md:flex-wrap max-md:pr-5">
            <div className="flex gap-4 pr-20 max-md:flex-wrap">
              <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-200">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/45ec462c080505d27105b1cd2cd94766b08cfbe0a0979c2efcbb30afa0cf58fc?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="flex flex-col justify-center my-auto whitespace-nowrap leading-[150%]">
                <div className="text-base font-medium text-neutral-900">
                  Lily Williams
                </div>
                <div className="text-sm text-slate-500">123 Main St.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-7 py-1.5 my-auto text-sm font-medium leading-5 whitespace-nowrap rounded-xl bg-slate-200 text-neutral-900 max-md:px-5">
              <div className="justify-center bg-slate-200">Edit</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between py-3 pr-20 pl-4 max-w-full bg-slate-50 w-[1062px] max-md:flex-wrap max-md:pr-5">
            <div className="flex gap-4 pr-20 max-md:flex-wrap">
              <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-200">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/660a835bb296fc4835ffccad8a217950cd3db97801fb27330762975668a7926e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="flex flex-col justify-center my-auto whitespace-nowrap leading-[150%]">
                <div className="text-base font-medium text-neutral-900">
                  Lily Williams
                </div>
                <div className="text-sm text-slate-500">123 Main St.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-7 py-1.5 my-auto text-sm font-medium leading-5 whitespace-nowrap rounded-xl bg-slate-200 text-neutral-900 max-md:px-5">
              <div className="justify-center bg-slate-200">Edit</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between py-3 pr-20 pl-4 max-w-full bg-slate-50 w-[1062px] max-md:flex-wrap max-md:pr-5">
            <div className="flex gap-4 pr-20 max-md:flex-wrap">
              <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-200">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9a4cf29696865e3c80a2fa58d8278e4c3b154fb951b9f65f7cf3c289e9a8a1d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="flex flex-col justify-center my-auto whitespace-nowrap leading-[150%]">
                <div className="text-base font-medium text-neutral-900">
                  Lily Williams
                </div>
                <div className="text-sm text-slate-500">123 Main St.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-7 py-1.5 my-auto text-sm font-medium leading-5 whitespace-nowrap rounded-xl bg-slate-200 text-neutral-900 max-md:px-5">
              <div className="justify-center bg-slate-200">Edit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
