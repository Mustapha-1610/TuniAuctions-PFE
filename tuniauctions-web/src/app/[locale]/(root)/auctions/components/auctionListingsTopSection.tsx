"use client";
import { useState } from "react";

export default function AuctionListingsTopSection() {
  const [selectedOption, setSelectedOption] = useState("Upcoming");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto self-start mt-4 text-base leading-7 capitalize text-zinc-800">
          Showing 1–12 of 41 results
        </div>
        <div className="relative">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="block appearance-none w-full py-3 pr-10 pl-3.5 text-base leading-6 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-transparent-900 transition ease-in-out duration-150"
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Finished">Finished</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
