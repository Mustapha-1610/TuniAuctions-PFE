"use client";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { Modal, Input, Button } from "antd";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { resDataType } from "@/serverHelpers/types";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";

export default function EditNameModal() {
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    setEditInformationsModalState,
    isEditNameModalOpen,
    setEditNameModalState,
  } = useBidderNavigationStore();
  const { setBidderLocalStorageData } = useBidderProfileStore();

  const handleSubmit = async () => {
    if (newName) {
      setLoading(true);

      const res = await fetch("/api/bidder/changeName", {
        method: "PUT",
        body: JSON.stringify({ fullName: newName }),
      });
      const resData: resDataType = await res.json();
      if (resData.success && resData.bidderFrontData) {
        setBidderLocalStorageData(resData.bidderFrontData);
        setEditNameModalState(false);
        setEditInformationsModalState(false);
      } else {
        setErrorMessage(resData.errorMessage);
      }

      setLoading(false);
    }
  };
  return (
    <>
      {/* Ant Design Modal component */}
      <Modal
        centered
        open={isEditNameModalOpen} // Update visibility based on state
        width={600} // Adjust width as needed
        onCancel={() => {
          setEditNameModalState(false);
        }}
        footer={null}
      >
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
        >
          {/* Modal content */}
          <div className="flex justify-center items-center">
            {/* Left column */}
            <div className="flex flex-col w-1/2 p-4">
              <p className="text-gray-600 mb-2">Enter full name</p>
              {errorMessage && (
                <p className="text-red-500 mb-2">{errorMessage}</p>
              )}
              <Input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter full name"
              />
              <div className="flex justify-center mt-2">
                <Button
                  color="green"
                  style={{
                    color: "green",
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </Spin>
      </Modal>
    </>
  );
}
