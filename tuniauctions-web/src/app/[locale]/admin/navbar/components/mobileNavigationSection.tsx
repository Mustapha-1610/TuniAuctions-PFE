"use client";
import { useSellerNavbarStore } from "@/helpers/store/sellerNavbarState";
import NavigationSection from "./navigationSection";
import { Props } from "../adminNavbar";
import AdminNavigationSection from "./navigationSection";
export default function AdminMobileNavigation({
  navigationTranslation,
}: Props) {
  const isSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.isSideBarOpen
  );
  const setIsSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.changeSideBarState
  );
  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-gray-900 transition-opacity ease-linear duration-300 ${
          isSideBarOpenTest ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={isSideBarOpenTest ? "false" : "true"}
        onClick={setIsSideBarOpenTest}
      ></div>
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-gray-200 transform transition-transform ease-in-out duration-300 ${
          isSideBarOpenTest ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-2 py-2">
          <AdminNavigationSection
            navigationTranslation={navigationTranslation}
          />
        </div>
      </div>
    </>
  );
}
