"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
interface Props {
  setAuctionListingForm: (prev: any) => void;
}
export default function DatePickingSection({ setAuctionListingForm }: Props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setAuctionListingForm((prev: any) => ({
      ...prev,
      startingDate: date,
    }));
  };
  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Starting Date
        </label>
        <DatePicker
          id="date"
          selected={selectedDate}
          onChange={handleDateChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
    </>
  );
}
