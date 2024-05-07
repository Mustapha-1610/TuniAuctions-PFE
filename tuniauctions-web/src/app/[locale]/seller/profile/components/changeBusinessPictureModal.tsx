import { Modal, Button, Image } from "antd";
import { useState } from "react";
import { handleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import { resDataType } from "@/serverHelpers/types";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { ISellerFrontData } from "@/models/usersModels/types/sellerTypes";

interface Props {
  isChaneBusinessPictureModalOpen: boolean;
  setChangeBusinessPictureModalState: (value: boolean) => void;
  setSellerLocalStoraData: (value: ISellerFrontData) => void;
  businessPicture: string;
}

export default function ChangeBusinessPictureModal({
  isChaneBusinessPictureModalOpen,
  setChangeBusinessPictureModalState,
  setSellerLocalStoraData,
  businessPicture,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleConfirm = async () => {
    setLoading(true);
    if (selectedImage) {
      const newPicture = await handleFirebaseImageUpload(
        selectedImage,
        "bidder/ProfilePictures/"
      );
      const res = await fetch("/api/seller/changePictures", {
        method: "POST",
        body: JSON.stringify({
          picture: newPicture,
          imageType: "profile",
        }),
      });
      const resData: resDataType = await res.json();
      if (resData.success) {
        setSellerLocalStoraData(resData.sellerFrontData!);
      } else {
        setChangeBusinessPictureModalState(false);
      }
    }
    setLoading(false);
    setChangeBusinessPictureModalState(false);
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setChangeBusinessPictureModalState(false);
  };

  return (
    <Modal
      title="Change Business Picture"
      centered
      open={isChaneBusinessPictureModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="flex flex-col items-center justify-center">
        {selectedImage ? (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Business Picture"
            className="flex flex-col gap-5 px-6 py-5 rounded-xl  border-solid max-md:pl-5 max-md:max-w-full bg-cover"
            height={270}
            width={270}
          />
        ) : (
          <Image
            src={businessPicture}
            alt="Seller Business Picture"
            className="flex flex-col gap-5 px-6 py-5 rounded-xl  border-solid max-md:pl-5 max-md:max-w-full bg-cover"
            height={270}
            width={270}
          />
        )}
        {!loading && (
          <label className="cursor-pointer mt-4">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="border-2 border-blue-500 text-blue-500 rounded px-1 py-1 hover:bg-blue-500 hover:text-white transition-colors duration-200">
                Choose Picture
              </div>
            </label>
          </label>
        )}
        {selectedImage && (
          <div className="flex gap-4 mt-4">
            <Button
              key="confirm"
              type="primary"
              loading={loading}
              onClick={handleConfirm}
              style={{ backgroundColor: "green", borderColor: "green" }}
            >
              Confirm
            </Button>
            <Button
              loading={loading}
              key="cancel"
              onClick={handleCancel}
              danger
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
