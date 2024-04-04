import React, { useState } from "react";

interface Props {
  handleAuctionListingFormChange: (
    element: React.ChangeEvent<HTMLInputElement>
  ) => void;
  setAuctionListingForm: (value: any) => void;
}

const TitleAndDescriptionSection: React.FC<Props> = ({
  handleAuctionListingFormChange,
  setAuctionListingForm,
}) => {
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setCharCount(inputValue.length);

    setAuctionListingForm((prev: any) => ({
      ...prev,
      description: inputValue,
    }));
  };

  return (
    <>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 mt-4"
      >
        Title
      </label>
      <input
        type="text"
        maxLength={50}
        onChange={handleAuctionListingFormChange}
        name="title"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
      />
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          rows={3}
          maxLength={350}
          placeholder="Minimum 350 characters"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">
            {charCount}/350 characters
          </span>
          {/* You can also add logic to change color or display warning when approaching the character limit */}
        </div>
      </div>
    </>
  );
};

export default TitleAndDescriptionSection;
