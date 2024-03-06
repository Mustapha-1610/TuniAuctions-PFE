import { MdOutlineAttachMoney } from "react-icons/md";

interface Props {
  Title: string;
  Amount: number;
}
export default function EarningsDisplay({ Title, Amount }: Props) {
  return (
    <>
      <div className="bg-gray-600 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
              {Amount}
            </span>
            <h3 className="text-base text-white font-normal ">{Title}</h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
            <MdOutlineAttachMoney size={50} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
