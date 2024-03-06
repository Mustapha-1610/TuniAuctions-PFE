import { MdOutlineAttachMoney } from "react-icons/md";

interface Props {
  Title: string;
  Amount: number;
}
export default function EarningsDisplay({ Title, Amount }: Props) {
  return (
    <>
      <div className="flex pr-1 flex-col border-black w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex bg-gray-500 border flex-col grow justify-center self-stretch p-5 mx-auto w-full font-semibold bg-white rounded-lg border-black shadow-sm leading-[150%] text-zinc-800 max-md:mt-6">
          <div className="flex border-black flex-wrap gap-5 justify-between content-center">
            <div className="flex flex-col flex-1">
              <div className=" text-2xl text-white  whitespace-nowrap">
                {Title}
              </div>
              <div className="mt-3 text-2xl text-white">{Amount}$</div>
              <div className="flex gap-2.5 justify-between py-1 pr-7 mt-3 text-xs text-emerald-400 max-md:pr-5"></div>
            </div>

            <MdOutlineAttachMoney
              color="white"
              size={65}
              className="my-auto max-w-full aspect-[3.03] w-[120px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
