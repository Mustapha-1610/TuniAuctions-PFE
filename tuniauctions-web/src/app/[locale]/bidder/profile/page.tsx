"use client";
import * as React from "react";
import Notifications from "./components/notifications";
import TopSection from "./components/topSection";
import BidderStatisticsAndAdresses from "./components/statisticsAndAdresses";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";

export default function MyComponent() {
  const { selectedProfileComponent, setSelectedProfileComponent } =
    useBidderNavigationStore();
  React.useEffect(() => {
    return () => {
      setSelectedProfileComponent("statsAndAdresses");
    };
  }, []);
  return (
    <div className="flex pt-20 flex-col justify-center">
      <div className="flex justify-center items-center px-16 w-full  max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-end  pl-3.5 w-full border border-white border-solid max-w-[1320px] max-md:max-w-full">
          {
            <TopSection
              setSelectedProfileComponent={setSelectedProfileComponent}
              selectedProfileComponent={selectedProfileComponent}
            />
          }
          {selectedProfileComponent === "statsAndAdresses" ? (
            <BidderStatisticsAndAdresses />
          ) : (
            selectedProfileComponent === "notifications" && <Notifications />
          )}
          <div className="mb-4" />
        </div>
      </div>
    </div>
  );
}
