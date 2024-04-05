import {
  basicAuctionListingPreviewType,
  premiumAuctionListingPreviewType,
  standardAuctionListingPreviewType,
} from "@/app/[locale]/seller/createListing/components/types";
import { useState } from "react";

interface Props {
  setPictureFiles: (prev: any) => void;
  auctionListing:
    | basicAuctionListingPreviewType
    | standardAuctionListingPreviewType
    | premiumAuctionListingPreviewType;
}

export default function ProductPicturesSection({ setPictureFiles }: Props) {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      if (files.length > 3) {
        setSelectedImages(null);
        setPictureFiles((prevState: any) => ({
          ...prevState,
          productPictures: null,
        }));
        setErrorMessage("You can only select a maximum of 3 images.");
        successMessage && setSuccessMessage("");
      } else if (files.length < 1) {
        setErrorMessage("Please select at least 1 image.");
        setSelectedImages(null);
        setPictureFiles((prevState: any) => ({
          ...prevState,
          productPictures: null,
        }));
        successMessage && setSuccessMessage("");
      } else {
        setSelectedImages(files);
        setPictureFiles((prevState: any) => ({
          ...prevState,
          productPictures: files,
        }));
        setErrorMessage(null);
        setSuccessMessage("Images selected successfully.");
      }
    }
  };

  return (
    <>
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
              multiple={true}
              accept="image/jpeg, image/png, image/gif , image/webp"
              onChange={handleImageSelection}
            />
          </label>

          {errorMessage && (
            <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-gl text-green-500 mt-1">{successMessage}</p>
          )}
          {selectedImages && (
            <ul className="mt-3 text-sm text-gray-700 font-serif italic">
              {Array.from(selectedImages).map((file, index) => (
                <li key={index}> {index + 1 + ". " + file.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
