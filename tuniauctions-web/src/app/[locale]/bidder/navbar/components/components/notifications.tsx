"use client";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import Image from "next/image";
import moment from "moment";
import { FaCircleExclamation } from "react-icons/fa6";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { useRouter } from "next/navigation";

interface Props {
  bidderData: IBidderFrontData | null;
  setNotificationsMenuState: () => void;
}

export default function Notifications({
  bidderData,
  setNotificationsMenuState,
}: Props) {
  const locale = useLocale();
  const router = useRouter();
  const { setSelectedProfileComponent, setSelectedBalanceComponent } =
    useBidderNavigationStore();
  function handleNotificationRouting(context: string) {
    if (context === "Transaction") {
      setSelectedBalanceComponent("transactions");
      setNotificationsMenuState();
      router.push(`/${locale}/bidder/balance`);
    }
  }
  return (
    <>
      <div className="absolute mt-4 left-3/3 transform -translate-x-2/3 bg-white text-black border border-netral-200 rounded-md shadow-lg max-w-xl z-10">
        <div className="py-2 px-3 border-b border-gray-300 font-bold flex justify-between items-center">
          <span>Notifications</span>
          <Link
            href={`/${locale}/bidder/profile`}
            className="cursor-pointer text-sm text-gray-500"
            onClick={() => {
              setNotificationsMenuState();
              setSelectedProfileComponent("notifications");
            }}
          >
            View All
          </Link>
        </div>
        <div className="h-72 w-80 overflow-y-auto">
          {bidderData?.notifications &&
            bidderData.notifications.map((value, index) => {
              return (
                <div
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                  key={index}
                  onClick={() => {
                    handleNotificationRouting(value.context.frontContext);
                  }}
                >
                  <Image
                    height={300}
                    width={400}
                    data-tooltip-target="tooltip-jese"
                    className="h-12 w-12 rounded-xl cursor-pointer"
                    src={value.context.notificationIcon}
                    alt="Medium avatar"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-semibold">
                      {value.notificationMessage}
                    </p>
                    <p className="text-xs text-gray-500 flex flex-rows">
                      Sent at:{" "}
                      {moment(value.context.receptionDate).format(
                        "ddd, MMM D, YYYY [at] h:mm A"
                      )}
                      {!value.readStatus && (
                        <FaCircleExclamation
                          className="ml-1"
                          size={13}
                          color="black"
                        />
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
