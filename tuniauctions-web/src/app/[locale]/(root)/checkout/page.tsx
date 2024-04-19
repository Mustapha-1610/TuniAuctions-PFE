"use client";
import * as React from "react";
import LocationPresets from "./components/locationPresets";

function MyComponent() {
  const [selectedOption, setSelectedOption] = React.useState<string>("billing");

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col mt-6 w-full max-w-[1586px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl max-md:text-4xl">Delivery Page</div>
                <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full justify-center">
                  <div
                    className={`text-2xl max-md:mt-10 max-md:text-center mt-12 cursor-pointer ${
                      selectedOption === "billing" ? "text-blue-800" : ""
                    }`}
                    onClick={() => setSelectedOption("billing")}
                  >
                    Billing Details
                  </div>
                  <div
                    className={`text-2xl max-md:mt-10 max-md:text-center mt-12 cursor-pointer ${
                      selectedOption === "preset" ? "text-blue-800" : ""
                    }`}
                    onClick={() => setSelectedOption("preset")}
                  >
                    Select Preset
                  </div>
                </div>
                {selectedOption === "billing" ? (
                  <>
                    <div className="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10">
                      <input
                        type="text"
                        className="shrink-0 max-w-full bg-white rounded-xl border border-gray-200 border-solid h-[65px] w-[446px] text-xl"
                      />
                    </div>
                    <textarea className="shrink-0 mt-4 bg-white rounded-xl border border-gray-200 border-solid h-[203px] max-md:max-w-full text-xl" />
                  </>
                ) : (
                  <>
                    <LocationPresets />
                  </>
                )}
                <div className="justify-center items-center self-center px-16 py-8 mt-7 max-w-full text-xl tracking-wide leading-5 text-center text-white whitespace-nowrap bg-emerald-400 rounded w-[442px] max-md:px-5 cursor-pointer">
                  Confirm
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 pt-8 pb-20 rounded-2xl border border-gray-200 border-solid shadow-sm text-slate-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl leading-7 max-md:max-w-full">
                  Your Order
                </div>
                <div className="shrink-0 mt-10 h-px bg-gray-200 max-md:max-w-full" />
                <img
                  className="shrink-0 self-center mt-16 h-52 rounded-2xl border border-gray-200 border-solid w-[225px] max-md:mt-10"
                  src=""
                  alt="ProductPicture"
                />
                <div className="self-center mt-14 text-xl leading-5 text-center max-md:mt-10">
                  Yidarton Women Summer Blue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 text-5xl leading-[57.6px] text-slate-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Delivery Page
        </div>
        <div className="flex flex-col justify-center px-16 py-10 mt-12 rounded-2xl border border-gray-200 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col mx-11 max-md:mr-2.5 max-md:max-w-full">
            <div className="text-2xl leading-7 text-slate-700 max-md:max-w-full">
              Your Order
            </div>
            <div className="shrink-0 mt-8 h-px bg-gray-200 max-md:max-w-full" />
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full rounded-2xl border border-gray-200 border-solid h-[405px] w-[442px] max-md:mt-10" />
                </div>
                <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-2xl leading-[57.6px] text-slate-700 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      Title : Yidarton Women Summer Blue
                    </div>
                    <div className="mt-8 max-md:mt-10 max-md:max-w-full">
                      Expected Delivery Date : Yidarton Women Summer Blue
                    </div>
                    <div className="mt-8 max-md:mt-10 max-md:max-w-full">
                      Delivery Date : Yidarton Women Summer Blue
                    </div>
                    <div className="mt-8 max-md:mt-10 max-md:max-w-full">
                      Status : Yidarton Women Summer Blue
                    </div>
                    <div className="mt-8 max-md:mt-10 max-md:max-w-full">
                      Seller Review : Yidarton Women Summer Blue
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
