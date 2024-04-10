"use client";
import { AuctionListingType } from "@/models/types/auctionListing";
import AuctionListingItems from "./components/auctionListingItems";
import AuctionListingsTopSection from "./components/auctionListingsTopSection";
import SidebarSection from "./components/sidebarSection";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Pagination from "./components/pagination";
import { useRootFilterStore } from "@/helpers/store/general/rootAuctionsNavigationStore";

interface Props {
  upcomingAuctions: AuctionListingType[] | null;
  finishedAuctions: AuctionListingType[] | null;
}
export default function AuctionsDisplayPage({
  finishedAuctions,
  upcomingAuctions,
}: Props) {
  const t = useTranslations("AuctionPage");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    selectedCategory,
    selectedType,
    setSelectedCategory,
    setSelectedType,
  } = useRootFilterStore();
  const [selectedDisplay, setSelectedDisplay] = useState<
    AuctionListingType[] | null
  >(upcomingAuctions!.slice(0, 6));

  function filterBySearch(title: string) {
    if (title) {
      const newDisplayItems = selectedDisplay?.filter((listing) =>
        listing.title.toLowerCase().includes(title.toLowerCase())
      );
      newDisplayItems
        ? setSelectedDisplay(newDisplayItems)
        : setSelectedDisplay([]);
      setSelectedCategory("");
    } else {
      filterDisplayedItems();
    }
  }

  function filterDisplayedItems() {
    if (selectedCategory) {
      const currentDisplay =
        selectedType === "Upcoming" ? upcomingAuctions : finishedAuctions;
      const newDisplayItems = currentDisplay?.filter(
        (value) => value.category === selectedCategory
      );
      newDisplayItems
        ? setSelectedDisplay(newDisplayItems)
        : setSelectedDisplay([]);
    } else {
      selectedType === "Upcoming"
        ? setSelectedDisplay(upcomingAuctions)
        : setSelectedDisplay(finishedAuctions);
    }
    currentItems = selectedDisplay!.slice(0, 6);
    setCurrentPage(1);
  }

  const itemsPerPage = 6;
  let currentItems = selectedDisplay!.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    filterDisplayedItems();
  }, [selectedCategory, selectedType]);
  return (
    <div className="w-full mb-16 min-h-screen bg-white flex flex-col justify-start items-start">
      <div className="relative w-full">
        <div className="h-[20%] md:h-[30%] lg:h-[40%] xl:h-[50%] px-[5%] md:px-[10%] lg:px-[15%] pt-[10%] md:pt-[5%] pb-2 left-0 top-0 absolute flex flex-col justify-start items-center">
          <div className="text-slate-900 text-5xl md:text-7xl font-bold font-['Work_Sans'] leading-[6vw] md:leading-[7vw]">
            {t("Title")}
          </div>
          <div className="flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex-wrap justify-center max-w-[1408px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <SidebarSection
                  filterBySearch={filterBySearch}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                <div className="flex flex-col ml-5 w-[960px] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch px-4 pb-12 max-w-[1056px] max-md:mt-4 max-md:max-w-full">
                    <AuctionListingsTopSection
                      selectedType={selectedType}
                      setSelectedType={setSelectedType}
                    />
                    {currentItems && (
                      <>
                        <div className="mt-8 max-md:max-w-full">
                          <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0 max-md:">
                            {currentItems.map((value, index) => (
                              <AuctionListingItems
                                auctionItem={value}
                                key={index}
                              />
                            ))}
                          </div>
                        </div>
                        {/* Pagination Container */}
                        <Pagination
                          currentPage={currentPage}
                          itemsPerPage={itemsPerPage}
                          selectedDisplay={selectedDisplay}
                          setCurrentPage={setCurrentPage}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
