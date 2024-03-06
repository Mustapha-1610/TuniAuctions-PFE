import { FaEye } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdCreate } from "react-icons/io";

export default function StatisticsSection() {
  return (
    <>
      <div className="justify-center max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pb-6 max-md:mt-6 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col border-black w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex bg-gray-600 border flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-white rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                      <div className="flex border-black flex-wrap gap-5 justify-between content-center">
                        <div className="flex flex-col flex-1">
                          <div className="text-white whitespace-nowrap">
                            Total Created Auctions
                          </div>
                          <div className="mt-3 text-white">0</div>
                          <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5"></div>
                        </div>

                        <IoMdCreate
                          color="white"
                          size={45}
                          className="my-auto max-w-full aspect-[3.03] w-[120px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col border-black w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex border bg-gray-600 flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-white rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                      <div className="flex border-black flex-wrap gap-5 justify-between content-center">
                        <div className="flex flex-col flex-1">
                          <div className="text-white whitespace-nowrap">
                            Total Views
                          </div>
                          <div className="mt-3 text-white">9,789</div>
                          <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5"></div>
                        </div>

                        <FaEye
                          color="white"
                          size={55}
                          className="my-auto max-w-full aspect-[3.03] w-[120px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex pr-1 flex-col border-black w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex bg-gray-600 border flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-white rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
                      <div className="flex border-black flex-wrap gap-5 justify-between content-center">
                        <div className="flex flex-col flex-1">
                          <div className="text-white whitespace-nowrap">
                            Total Participating Bidders
                          </div>
                          <div className="mt-3 text-white">9,789</div>
                          <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5"></div>
                        </div>

                        <GiTakeMyMoney
                          color="white"
                          size={75}
                          className="my-auto max-w-full aspect-[3.03] w-[120px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
