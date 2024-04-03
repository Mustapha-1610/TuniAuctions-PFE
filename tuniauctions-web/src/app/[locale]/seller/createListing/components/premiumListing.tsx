"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { handleMultipleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import {
  SocialSelectionForm,
  auctionListingFormType,
  pictureFiles,
} from "./types";
import PreviewModal from "./preview";

export default function PremiumListing() {
  const [socialsSectionForm, setSocialsSectionForm] =
    useState<SocialSelectionForm>({
      facebook: "",
      instagram: "",
      youtube: "",
      twitter: "",
      tiktok: "",
    });
  const [auctionListingForm, setAuctionListingForm] =
    useState<auctionListingFormType>({
      title: "",
      buyItNowSection: {
        promotionalDescription: "",
        promotionalPicture: "",
      },
      guarentee: "",
      description: "",
      openingBid: 0,
      originalPrice: 0,
      participatingBidders: 0,
      productCategory: "",
      productPictures: [""],
      promotionalVideo: "",
      socialsSection: socialsSectionForm,
      startingDate: "",
    });
  const [show, setShow] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPreviewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [pictureFiles, setPictureFiles] = useState<pictureFiles>({
    promotionalPicture: undefined,
    productPictures: null,
  });
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const handleItemClick = (platform: string) => {
    setSelectedItem(platform);
    setShow(true);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialsSectionForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const hanleProductFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <>
      <div className="mb-6">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label
            htmlFor="category1"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Product Category
          </label>
          <select
            id="category1"
            name="category1"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="Electronics">Electronics</option>
            <option value="Clothing & Apparel">Clothing & Apparel</option>
            <option value="Sports & Outdoors">Sports & Outdoors</option>
            <option value="Home & Garden">Home & Garden</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Toys & Games">Toys & Games</option>
            <option value="Pet Supplies">Pet Supplies</option>
          </select>
        </div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Title
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md "
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
            rows={3}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col mb-6 sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
          <div className="flex flex-col items-center justify-center h-52 border border-2 border-gray-300 rounded-md">
            <p>Select Display Images</p>
            <label>
              <div className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Upload Images
              </div>
              <input
                className="hidden"
                type="file"
                onChange={(e) => {
                  setPictureFiles((prevState) => ({
                    ...prevState,
                    productPictures: e.target.files,
                  }));
                }}
              />
            </label>

            <p className="text-xs text-gray-500 mt-1">Maximum 3</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col items-center justify-center h-52 border border-2 border-gray-300 rounded-md">
            <p>Select Promotional Video</p>
            <label>
              <div className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Upload Video
              </div>
              <input className="hidden" type="file" />
            </label>

            <p className="text-xs text-gray-500 mt-1">Maximum 60s</p>
          </div>
        </div>
      </div>
      <div className="mb-6 flex justify-center items-center h-full">
        {" "}
        {/* Updated parent container */}
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0 item-center justify-center">
          {" "}
          {/* Item to be centered */}
          <div className="flex flex-col items-center justify-center h-60 border border-2 border-gray-300 rounded-md">
            <p>Buy it now section</p>
            <label>
              <div className="mt-2 mb-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Upload Promotional Image
              </div>
              <input
                className="hidden"
                type="file"
                onChange={(e) => {
                  setPictureFiles((prevState) => ({
                    ...prevState,
                    promotionalPicture: e.target.files?.[0],
                  }));
                }}
              />
            </label>

            <textarea
              className="text-xs text-gray-500 mt-1 border border-black rounded-lg"
              rows={6}
              cols={80}
              placeholder="Promotional Description"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
          <label
            htmlFor="stock1"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            type="text"
            id="stock1"
            name="stock1"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="stock2"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            type="text"
            id="stock2"
            name="stock2"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date and Time
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
      <div className="mb-6">
        <label
          htmlFor="regularPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Regular Price
        </label>
        <input
          type="text"
          id="regularPrice"
          name="regularPrice"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md "
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="salePrice"
          className="block text-sm font-medium text-gray-700"
        >
          Sale Price
        </label>
        <input
          type="text"
          id="salePrice"
          name="salePrice"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md "
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Socials Section
        </label>
        <div className="mt-1 p-2 w-full border border-gray-300 rounded-md  h-auto flex flex-col items-center">
          <div className="flex items-center">
            <FaFacebook
              size={37}
              className="mx-2 cursor-pointer text-gray-500 hover:text-blue-500 transition-colors duration-300"
              onClick={() => handleItemClick("facebook")}
            />

            <FaTwitter
              size={37}
              className="mx-2 cursor-pointer text-gray-500 hover:text-blue-400 transition-colors duration-300"
              onClick={() => handleItemClick("twitter")}
            />
            <FaYoutube
              size={37}
              className="mx-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors duration-300"
              onClick={() => handleItemClick("youtube")}
            />
            <FaTiktok
              size={37}
              className="mx-2 cursor-pointer text-gray-500 hover:text-black transition-colors duration-300"
              onClick={() => handleItemClick("tiktok")}
            />
            <FaInstagram
              size={37}
              className="mx-2 cursor-pointer text-gray-500 hover:text-pink-500 transition-colors duration-300"
              onClick={() => handleItemClick("instagram")}
            />
          </div>
          {show && selectedItem && (
            <>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md  text-center"
                name={selectedItem}
                onChange={handleInputChange}
                value={socialsSectionForm[selectedItem]}
                placeholder={`Enter your ${selectedItem} Link`}
              />
              <div className="flex flex-rows mt-4">
                <button
                  onClick={() => {
                    setShow(false);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Confirm
                </button>
                <button
                  onClick={() => {
                    setShow(false);
                    setSocialsSectionForm((prevState) => ({
                      ...prevState,
                      [selectedItem]: "",
                    }));
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mb-6">
        <button className="bg-blue-500 mr-2 text-white px-4 py-2 rounded-md">
          Save product
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={() => setPreviewModalOpen(true)}
        >
          Preview listing
        </button>
      </div>
      {isPreviewModalOpen && (
        <PreviewModal
          isPreviewModalOpen={isPreviewModalOpen}
          setPreviewModalOpen={setPreviewModalOpen}
          auctionListing={auctionListingForm}
          picture={pictureFiles}
        />
      )}
    </>
  );
}
