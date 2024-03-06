"use client";
import { useSellerNavbarStore } from "@/helpers/store/sellerNavbarState";
import NavigationSection from "./navigationSection";
import { Props } from "../sellerNavbar";
export default function MobileNavigation({ navigationTranslation }: Props) {
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
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform ease-in-out duration-300 ${
          isSideBarOpenTest ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-2">
          <NavigationSection navigationTranslation={navigationTranslation} />
        </div>
      </div>
    </>
  );
}
