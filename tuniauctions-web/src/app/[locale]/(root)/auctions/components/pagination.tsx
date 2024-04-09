import { AuctionListingType } from "@/models/types/auctionListing";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  selectedDisplay: AuctionListingType[] | null;
  itemsPerPage: number;
  setCurrentPage: (value: any) => void;
  currentPage: number;
}
export default function Pagination({
  itemsPerPage,
  selectedDisplay,
  setCurrentPage,
  currentPage,
}: Props) {
  const totalPages = Math.ceil(selectedDisplay!.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prev: any) => Math.min(prev + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prev: any) => Math.max(prev - 1, 1));
  };
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div className="flex items-center">
          <FaArrowLeft
            className="mr-2 cursor-pointer"
            size={17}
            onClick={handleClickPrev}
          />

          <div className="bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center">
            {currentPage}
          </div>
          <FaArrowRight
            className="ml-2 cursor-pointer"
            size={17}
            onClick={handleClickNext}
          />
        </div>
      </div>
    </>
  );
}
