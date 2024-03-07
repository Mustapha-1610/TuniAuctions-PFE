import * as React from "react";
import HeroSection from "../pageComponents/heroSection";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function MyComponent() {
  return (
    <>
      <div className="flex flex-col items-center px-20 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
        <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"
                className="grow w-fit aspect-[1] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center self-stretch pt-9 pr-6 pb-6 pl-1.5 my-auto w-full font-bold text-black bg-white border border-white border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl text-center whitespace-nowrap">
                  Iphone 15 Example{" "}
                </div>
                <div className="self-stretch mt-8 text-sm max-md:max-w-full">
                  Unveiled in September 2023, the iPhone 15 boasts a familiar
                  design with a powerful A16 Bionic chip at its core. Its
                  beautiful Super Retina XDR OLED display, available in 6.1-inch
                  and 6.7-inch versions,{" "}
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
                    <div className="my-auto text-right">3OO$</div>
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
                    <div className="my-auto text-right">20$</div>
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
                      10/09/2001 16:08 PM
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
                    <div className="my-auto text-right">10/100</div>
                  </div>
                  {/* table item */}
                  <div className="flex gap-5 justify-between px-4 py-5  w-full whitespace-nowrap bg-white border border-black border-solid max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-2.5">
                      <FaRegCircleCheck
                        className="shrink-0  h-[54px] w-[42px]"
                        size={20}
                        color="black"
                      />
                      <div className="flex-auto my-auto">Guarantee</div>
                    </div>
                    <div className="my-auto text-right">1 Year</div>
                  </div>
                  <div className="z-10 justify-center cursor-pointer items-center px-16 py-9 -mb-1 text-center text-white whitespace-nowrap rounded-none border border-black border-solid bg-gray-700 max-md:px-5 max-md:max-w-full">
                    Participate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 w-full max-w-[1396px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col  w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-8 py-6 w-full text-3xl text-center text-black bg-white border border-white border-solid max-md:px-5 max-md:max-w-full">
                <div className="self-center">Product Video</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 , https://cdn.builder.io/api/v1/image/assets/TEMP/53b11f4f0a534bcf0249753ee2114eabf03accb343ca6a16a6963a65d44155bd?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="mt-3.5 w-full aspect-[2.13] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center self-stretch px-1.5 pt-7 pb-5 my-auto w-full text-center text-black bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl">Buy It Now</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/921e3730a7948c8e41130335cdc66d158a97b806edf9a29d31344cfe97f417aa?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="mt-1 max-w-full aspect-[1.59] w-[253px]"
                />
                <div className="self-stretch px-14 pt-2 pb-3.5 mt-6 text-xl bg-white rounded-lg border border-white border-solid max-md:pr-6 max-md:pl-5 max-md:max-w-full">
                  Save big! Get 20% off everything. Shop now and treat yourself
                  to the things you love at amazing prices. This offer won't
                  last long, so don't miss out!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-8 flex-col pb-2.5 mt-7 w-full bg-white rounded-2xl max-w-[1365px] max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col items-center px-16 pt-10 w-full min-h-[189px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/edb043eaab37aab0dc8d74b234d9c3a9c6a38781546dae4fdd972293093cfa1e?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc2192bdfeec119454551f198888c45ddc3d9954db54d6ec9112185e0f080e25?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
              className="z-10 mb-0 max-w-full aspect-[1.03] w-[225px] max-md:mb-2.5"
            />
          </div>
          <div className="self-center mt-8 font-bold text-xl text-center text-black max-md:mt-10">
            Long Seller Name For Testing Purposes
          </div>
          <div className="flex gap-5 justify-between self-center mt-6 max-md:flex-wrap">
            <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
            <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
            <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
            <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
            <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
            <div className="shrink-0 rounded-full bg-zinc-300 h-[54px] w-[51px]" />
          </div>
          <div className="z-10 px-4 pb-8 mx-6 mt-7 text-sm text-center text-black bg-white rounded-xl border border-white border-solid max-md:mr-2.5 max-md:max-w-full">
            Unveiled in September 2023, the iPhone 15 boasts a familiar design
            with a powerful A16 Bionic chip at its core. Its beautiful Super
            Retina XDR OLED display, available in 6.1-inch and 6.7-inch
            versions, delivers stunning visuals. The camera system takes a leap
            forward with a 48MP main sensor for exceptional photo and video
            capture, accompanied by versatile ultra-wide and telephoto lenses.
            The iPhone 15 continues to excel with long battery life, secure Face
            ID, and the latest iOS 17 software, making it a compelling choice
            for mobile enthusiasts.
          </div>
        </div>
      </div>
    </>
  );
}
