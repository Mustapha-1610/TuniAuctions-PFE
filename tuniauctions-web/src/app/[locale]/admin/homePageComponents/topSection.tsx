import { GoEye } from "react-icons/go";
import { FaEye, FaUserTie } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
interface Props {
  earnings: number | undefined;
  activeSellers: number;
  activeBidders: number;
}
export default function TopStatisticsSection({
  activeBidders,
  activeSellers,
  earnings,
}: Props) {
  return (
    <>
      <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-teal-500 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-black">
                {earnings?.toFixed(2)} $
              </span>
              <h3 className="text-bold  font-normal ">Earnings</h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
              <GiReceiveMoney size={50} />
            </div>
          </div>
        </div>
        <div className="bg-lime-400 shadow rounded-lg p-4 sm:p-6 xl:p-8 text-black">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold ">
                {activeSellers}
              </span>
              <h3 className="text-base  font-normal ">Active Sellers</h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
              <FaUserTie size={50} />
            </div>
          </div>
        </div>
        <div className="bg-cyan-500 shadow rounded-lg p-4 sm:p-6 xl:p-8 text-black">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold ">
                {activeBidders}
              </span>
              <h3 className="text-base  font-normal ">Active Bidders</h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
              <HiMiniUserGroup size={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
