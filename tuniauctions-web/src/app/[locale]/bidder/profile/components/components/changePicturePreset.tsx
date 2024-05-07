import { Modal, Button, Image } from "antd";
import { useState } from "react";
import { handleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import { resDataType } from "@/serverHelpers/types";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";

interface Props {
  isChangePictureModalOpen: boolean;
  setChangePictureModalState: (value: boolean) => void;
  setBidderLocalStorageData: (value: IBidderFrontData) => void;
  bidderPicture: string;
}

export default function ChangeBidderProfilePictureModal({
  isChangePictureModalOpen,
  setChangePictureModalState,
  setBidderLocalStorageData,
  bidderPicture,
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
      const res = await fetch("/api/bidder/changePicture", {
        method: "POST",
        body: JSON.stringify({ newPicture }),
      });
      const resData: resDataType = await res.json();
      if (resData.success) {
        setBidderLocalStorageData(resData.bidderFrontData!);
      } else {
        setChangePictureModalState(false);
      }
    }
    setLoading(false);
    setChangePictureModalState(false);
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setChangePictureModalState(false);
  };

  return (
    <Modal
      title="Change Profile Picture"
      centered
      open={isChangePictureModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="flex flex-col items-center justify-center">
        {selectedImage ? (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Profile Picture"
            className="rounded-full w-56 h-56 mb-4"
            height={230}
            width={230}
          />
        ) : (
          <Image
            src={bidderPicture}
            alt="Bidder Profile Picture"
            className="rounded-full w-56 h-56 mb-4"
            height={230}
            width={230}
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
