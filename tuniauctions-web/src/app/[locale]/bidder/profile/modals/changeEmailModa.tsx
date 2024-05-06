// Import required modules
"use client";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { resDataType } from "@/serverHelpers/types";
import { Modal, Input, Button } from "antd";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// Define the component
export default function EditEmailModal() {
  // State variables
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    isEditEmailModalOpen,
    setEditEmailModalState,
    setEditInformationsModalState,
  } = useBidderNavigationStore();
  const { setBidderLocalStorageData } = useBidderProfileStore();
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (phase: 1 | 2) => {
    setLoading(true);
    if (phase === 1 && code) {
      const res = await fetch("/api/bidder/email/verifyCode", {
        method: "POST",
        body: JSON.stringify({ secretCode: code }),
      });
      const resData: resDataType = await res.json();
      if (resData.success) {
        setVerified(true);
      } else {
        setErrorMessage(resData.errorMessage);
      }
    } else if (phase === 2) {
      const res = await fetch("/api/bidder/email/resetMail", {
        method: "PUT",
        body: JSON.stringify({ newEmail }),
      });
      const resData: resDataType = await res.json();
      if (resData.success && resData.bidderFrontData) {
        setBidderLocalStorageData(resData.bidderFrontData);
        setEditEmailModalState(false);
        setEditInformationsModalState(false);
      } else {
        setErrorMessage(resData.errorMessage);
      }
    }
    setLoading(false);
  };

  return (
    <>
      {/* Ant Design Modal component */}
      <Modal
        centered
        open={isEditEmailModalOpen} // Update visibility based on state
        width={600} // Adjust width as needed
        onCancel={() => {
          setEditEmailModalState(false);
        }}
        footer={null}
        maskClosable={false}
      >
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
        >
          {/* Modal content */}
          <div className="flex justify-center items-center ">
            {/* Left column */}
            <div className="flex flex-col w-1/2 p-4">
              {!verified && (
                <>
                  <p className="text-gray-600 mb-2">
                    Verification Code Sent to Email
                  </p>
                  {errorMessage && (
                    <p className="text-red-500 mb-2">{errorMessage}</p>
                  )}
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter verification code"
                  />
                  <div className="flex justify-center mt-2">
                    <Button
                      color="green"
                      style={{
                        color: "green",
                      }}
                      onClick={() => {
                        handleSubmit(1);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </>
              )}
              {verified && (
                <>
                  <p className="text-gray-600 mb-2">Enter New Email</p>
                  {errorMessage && (
                    <p className="text-red-500 mb-2">{errorMessage}</p>
                  )}
                  <Input
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Enter new email"
                  />
                  <div className="flex justify-center mt-2">
                    <Button
                      color="green"
                      style={{
                        color: "green",
                      }}
                      onClick={() => {
                        handleSubmit(2);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Spin>
      </Modal>
    </>
  );
}
