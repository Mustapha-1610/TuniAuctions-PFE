"use client";
import { useTranslations } from "next-intl";
import AdminNavigationSection from "./components/navigationSection";
import AdminMobileNavigation from "./components/mobileNavigationSection";
import TopSellerNavbarSection from "./components/topSection";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import ReportedDeliveryModal from "../modals/deliveryModal";
import SellerDataModal from "../modals/sellerModal";
import SellerAccountApplicationModal from "../modals/sellerApplicationModal";
import AdminAuctionListingModal from "../modals/auctionListingModal";
import AdminBiddingRoomModal from "../modals/biddingRoomModal";
import BidderInformationsModal from "../modals/bidderModal";
import { useEffect } from "react";
import { resDataType } from "@/serverHelpers/types";
import { useAdminProfileStore } from "@/helpers/store/admin/adminProfileStore";
import { useRouter } from "next/navigation";
import adminSocket from "@/frontHelpers/admin/adminSocket";

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

export default function AdminNavbar() {
  const router = useRouter();
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
  const {
    delivery,
    seller,
    isDeliveryModalOpen,
    isSellerModalOpen,
    isSellerAccountApplicationModalOpen,
    auction,
    isUpcomingAuctionModalOpen,
    isOngoingAuctionModalOpen,
    bidder,
    isBidderInformationModalOpen,
  } = useAdminStore();
  const { setAdminLocalStorageData } = useAdminProfileStore();
  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/admin/getData", {
        method: "POST",
      });
      const resData: resDataType = await res.json();
      if (resData.adminAccount) {
        setAdminLocalStorageData(resData.adminAccount);
        adminSocket.connect();
      } else if (resData.authError) {
        const res = await fetch("/api/admin/signout", {
          method: "POST",
        });
        const resData: resDataType = await res.json();
        if (resData.success) {
          setAdminLocalStorageData(null);
          router.push("/");
        }
      }
    }
    getData();
    adminSocket.on("refreshAdminData", async () => {
      getData();
    });
  }, []);
  return (
    <>
      <nav className="bg-gray-200 border-b border-gray-200 fixed z-30 w-full">
        <TopSellerNavbarSection />
      </nav>

      <AdminMobileNavigation navigationTranslation={navigationTranslation} />
      <div className="hidden lg:flex overflow-hidden bg-gray-200 lg:flex lg:flex-row-reverse">
        <div className="flex-grow p-4">
          <aside
            id="sidebar"
            className="fixed hidden z-20 h-full top-0 left-0 pt-12 flex lg:flex flex-shrink-0 flex-col w-60 transition-width duration-75"
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-200 pt-0">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3  divide-y space-y-1">
                  {" "}
                  <AdminNavigationSection
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
      {delivery && isDeliveryModalOpen && <ReportedDeliveryModal />}
      {seller && isSellerModalOpen && <SellerDataModal />}
      {seller && isSellerAccountApplicationModalOpen && (
        <SellerAccountApplicationModal />
      )}
      {isUpcomingAuctionModalOpen && auction && seller && (
        <AdminAuctionListingModal />
      )}
      {isOngoingAuctionModalOpen && auction && <AdminBiddingRoomModal />}
      {isBidderInformationModalOpen && bidder && <BidderInformationsModal />}
    </>
  );
}
