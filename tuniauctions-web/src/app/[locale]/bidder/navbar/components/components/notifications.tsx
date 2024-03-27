import Image from "next/image";

export default function Notifications() {
  return (
    <>
      <div className="absolute mt-4 left-3/3 transform -translate-x-2/3 bg-white text-black border border-netral-200 rounded-md shadow-lg max-w-xl z-10">
        <div className="py-2 px-3 border-b border-gray-300 font-bold">
          Notifications
        </div>
        <div className="h-80 w-80 overflow-y-auto">
          <div className="p-3 hover:bg-gray-100 cursor-pointer flex items-center">
            <Image
              height={100}
              width={100}
              data-tooltip-target="tooltip-jese"
              className="h-12 w-12 rounded-xl cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/TuniAuctionsReducedSizeLogo.png?alt=media&token=f087eef1-3a90-4095-99d8-349ebdb6c7aa"
              alt="Medium avatar"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold">Test Notification</p>
              <p className="text-xs text-gray-500">
                {`Sent at: 16/08/2024 01:09`}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
