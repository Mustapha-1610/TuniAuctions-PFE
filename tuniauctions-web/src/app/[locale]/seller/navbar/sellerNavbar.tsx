import NavigationSection from "./components/navigationSection";
import TopSellerNavbarSection from "./components/topSection";
import MobileNavigation from "./components/mobileNavigationSection";
import { useTranslations } from "next-intl";

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
  };
  return (
    <>
      <nav className="bg-black border-b border-gray-200 fixed z-30 w-full">
        <TopSellerNavbarSection />
      </nav>

      <MobileNavigation />
      <div className="hidden lg:flex overflow-hidden bg-white lg:flex lg:flex-row-reverse">
        <div className="flex-grow p-4">
          <NavigationSection navigationTranslation={navigationTranslation} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
