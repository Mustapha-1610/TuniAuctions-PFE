import React, { useState } from "react";

interface Props {
  setPictureFiles: (value: any) => void;
  setAuctionListingForm: (value: any) => void;
}

const BuyItNowSection: React.FC<Props> = ({
  setAuctionListingForm,
  setPictureFiles,
}) => {
  const [charCount, setCharCount] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setCharCount(inputValue.length);

    setAuctionListingForm((prev: any) => ({
      ...prev,
      buyItNowSection: {
        ...prev.buyItNowSection,
        promotionalDescription: inputValue,
      },
    }));
  };
  return (
    <div className="mb-6 flex justify-center items-center">
      <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
        <div className="flex flex-col items-center justify-center h-60 border border-2 border-gray-300 rounded-md">
          <p>Buy it now section</p>
          <label
            htmlFor="fileInput"
            className="mt-2 mb-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Upload Promotional Image
            <input
              id="fileInput"
              className="hidden"
              type="file"
              onChange={(e) => {
                setPictureFiles((prevState: any) => ({
                  ...prevState,
                  promotionalPicture: e.target.files?.[0],
                }));
              }}
            />
          </label>

          <textarea
            className="text-xs text-gray-500 mt-1 border border-black rounded-lg w-96 resize-none"
            rows={6}
            maxLength={250}
            placeholder="Promotional Description"
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">
              {charCount}/250 characters
            </span>
            {/* You can also add logic to change color or display warning when approaching the character limit */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyItNowSection;
