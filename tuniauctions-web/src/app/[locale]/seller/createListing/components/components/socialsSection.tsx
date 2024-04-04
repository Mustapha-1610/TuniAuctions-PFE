"use client";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SocialSelectionForm } from "../types";
import { useState } from "react";

interface Props {
  setSocialsSectionForm: (value: any) => void;
  socialsSectionForm: SocialSelectionForm;
}

export default function SocialsSection({
  setSocialsSectionForm,
  socialsSectionForm,
}: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialsSectionForm((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleItemClick = (platform: string) => {
    setSelectedItem(platform);
    setShow(true);
  };
  return (
    <>
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
                    setSocialsSectionForm((prevState: any) => ({
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
    </>
  );
}
