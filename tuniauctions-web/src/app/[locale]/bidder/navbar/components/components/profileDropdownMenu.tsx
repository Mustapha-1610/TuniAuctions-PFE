import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { resDataType } from "@/serverHelpers/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
interface Props {
  locale: string;
}
export default function PorfileDropdownMenu({ locale }: Props) {
  const { signoutBidder } = useBidderProfileStore();
  const router = useRouter();
  async function signout() {
    const res = await fetch("/api/bidder/signout", {
      method: "GET",
    });
    const resData: resDataType = await res.json();
    if (resData.success) {
      signoutBidder();
      router.push("/");
    }
  }
  return (
    <>
      <div className="absolute mt-2 left-3/3 transform -translate-x-2/3 bg-white text-black border border-netral-200 rounded-lg shadow-lg max-w-xl z-10">
        <Link
          href={"/" + locale + "/bidder/profile"}
          className="py-4 px-5 flex flex-rows  font-bold"
        >
          Profile <FaRegUser size={19} className="ml-3" />
        </Link>
        <Link
          className="py-2 px-2 flex flex-rows  font-bold"
          href={"/" + locale + "/bidder/dashboard"}
        >
          Dashboard <MdDashboardCustomize size={19} className="ml-3" />
        </Link>
        <div
          onClick={signout}
          className="py-4 px-5 flex flex-rows  font-bold cursor-pointer"
        >
          Logout <CiLogout size={20} className="ml-2" />
        </div>
      </div>
    </>
  );
}
