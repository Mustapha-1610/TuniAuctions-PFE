"use client";
import NavigationSection from "./components/navigationSection";
import TopSellerNavbarSection from "./components/topSection";
import MobileNavigation from "./components/mobileNavigationSection";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { resDataType } from "@/serverHelpers/types";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { useRouter } from "next/navigation";
import sellerSocket from "@/frontHelpers/seller/sellerSocket";
import { useSellerStore } from "@/helpers/store/seller/sellerStore";
import SellerBiddingRoomModal from "../modals/biddingRoomModal";
import NotificationsModal from "../modals/notificationsModal";
export interface Props {
  navigationTranslation: {
    Dashboard: string;
    Earnings: string;
    AuctionListings: string;
    AuctionsList: string;
    CreateAuctions: string;
    Deliveries: string;
    Delivered: string;
    Pending: string;
    Transactions: string;
    Pricing: string;
    Documentation: string;
    Help: string;
    Profile: string;
    Logout: string;
  };
}
const Navbar = () => {
  const t = useTranslations("Seller.NavigationSection");
  const navigationTranslation = {
    Dashboard: t("dashboard"),
    Earnings: t("earnings"),
    AuctionListings: t("auctionListings"),
    AuctionsList: t("auction'sList"),
    CreateAuctions: t("create"),
    Deliveries: t("deliveries"),
    Delivered: t("delivered"),
    Pending: t("pending"),
    Transactions: t("transactions"),
    Pricing: t("pricing"),
    Documentation: t("documentation"),
    Help: t("help"),
    Profile: t("profile"),
    Logout: t("logout"),
  };
  const { setSellerLocalStorageData, signoutSeller } = useSellerProfileStore();
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/seller/getData", {
        method: "POST",
      });
      const resData: resDataType = await res.json();
      if (resData.sellerFrontData) {
        setSellerLocalStorageData(resData.sellerFrontData);
        sellerSocket.emit("sellerConnection", resData.sellerFrontData.socketId);
      } else if (resData.authError) {
        const res = await fetch("/api/seller/signout", {
          method: "POST",
        });
        const resData: resDataType = await res.json();
        if (resData.success) {
          signoutSeller();
          router.push("/");
        }
      }
    }
    getData();
    sellerSocket.on("refreshSellerData", async () => {
      getData();
    });
  }, []);
  const { auction, isOngoingAuctionModalOpen, isNotificationsModalOpen } =
    useSellerStore();
  return (
    <>
      <nav className="bg-white border-b  fixed z-30 w-full">
        <TopSellerNavbarSection />
      </nav>

      <MobileNavigation navigationTranslation={navigationTranslation} />
      <div className="hidden lg:flex overflow-hidden bg-white lg:flex lg:flex-row-reverse">
        <div className="flex-grow p-4">
          <aside
            id="sidebar"
            className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                  {" "}
                  <NavigationSection
                    navigationTranslation={navigationTranslation}
                  />
                </div>
              </div>
            </div>
          </aside>
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
        </div>
      </div>
      {auction && isOngoingAuctionModalOpen && <SellerBiddingRoomModal />}
      {isNotificationsModalOpen && <NotificationsModal />}
    </>
  );
};

export default Navbar;
