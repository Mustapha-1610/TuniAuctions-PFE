"use client";
import React from "react";

export default function LockedHistory() {
  interface AuctionItemData {
    imageSrc: string;
    altText: string;
    title: string;
    startDate: string;
    lockedBalance: string;
  }

  interface AuctionItemProps {
    item: AuctionItemData;
  }

  const auctionData: AuctionItemData[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 1",
      title: "Auction Title Example 1",
      startDate: "Auction Starts 16/08/2002",
      lockedBalance: "300.000$",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 2",
      title: "Auction Title Example 2",
      startDate: "Auction Starts 17/08/2002",
      lockedBalance: "350.000$",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 3",
      title: "Auction Title Example 3 aaaaaaaaa aaaa",
      startDate: "Auction Starts 18/08/2002",
      lockedBalance: "400.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
  ];

  const AuctionItem: React.FC<AuctionItemProps> = ({ item }) => (
    <section className="flex flex-col md:flex-row gap-5 justify-between px-3.5 py-3.5 mt-5 w-full rounded-2xl border-2 border-white border-solid">
      <div className="flex flex-col md:flex-row gap-4 items-start w-full">
        <div
          className="flex-shrink-0 bg-gray-200 rounded-xl border border-white overflow-hidden"
          style={{ width: "104px", height: "104px" }}
        >
          <img
            loading="lazy"
            src={item.imageSrc}
            className="object-cover w-full h-full"
            alt={item.altText}
          />
        </div>
        <div className="flex flex-col flex-grow my-auto tracking-tighter text-black">
          <h3 className="text-xl font-bold leading-10 whitespace-normal overflow-hidden text-ellipsis">
            {item.title}
          </h3>
          <p className="mt-3 text-sm font-medium leading-10">
            {item.startDate}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center my-auto font-bold tracking-tighter text-right md:text-left">
        <p className="text-base leading-2 md:mr-3">
          Locked Balance {item.lockedBalance}
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-2.5 text-xs leading-2">
          <button className="px-3 py-2.5 rounded bg-neutral-400 text-black">
            Cancel
          </button>
          <button
            className="px-4 py-2.5 text-white bg-blue-700 rounded"
            tabIndex={0}
          >
            Add Funds
          </button>
        </div>
      </div>
    </section>
  );
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(auctionData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = auctionData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <div className="flex flex-col px-5 mt-16 max-md:mt-10 max-md:max-w-full">
        <header className="self-start ml-2.5 text-xl font-bold tracking-tighter leading-10 text-black">
          History
        </header>
        {currentItems.map((item, index) => (
          <AuctionItem key={index} item={item} />
        ))}
        <div className="flex justify-center items-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-white"
              } border border-blue-700`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
