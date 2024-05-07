// Import required modules
"use client";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { resDataType } from "@/serverHelpers/types";
import { Modal, Input, Button } from "antd";
import { useState, useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { IoIosCheckmarkCircle } from "react-icons/io";

// Define the component
export default function EditPasswordModal() {
  // State variables
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [success, setSuccess] = useState(false); // State for success message

  const [errorMessage, setErrorMessage] = useState("");
  const {
    setEditEmailModalState,
    setEditInformationsModalState,
    isEditPasswordModalOpen,
    setEditPasswordModalState,
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
      if (resData.success) setVerified(true);
      else if (resData.authError) {
      } else setErrorMessage(resData.errorMessage);
    } else if (phase === 2 && newPassword) {
      if (newPassword !== confirmNewPassword) {
        setErrorMessage("mismatch");
      } else {
        const res = await fetch("/api/bidder/password/resetPassword", {
          method: "PUT",
          body: JSON.stringify({ newPassword, confirmNewPassword }),
        });
        const resData: resDataType = await res.json();
        if (resData.success && resData.bidderFrontData) {
          setBidderLocalStorageData(resData.bidderFrontData);
          setSuccess(true); // Set success state to true
          setTimeout(() => {
            setSuccess(false);
            setEditEmailModalState(false);
            setEditInformationsModalState(false);
          }, 2000);
        } else {
          setErrorMessage(resData.errorMessage);
        }
      }
    }
    setLoading(false);
  };

  return (
    <>
      {/* Ant Design Modal component */}
      <Modal
        centered
        open={isEditPasswordModalOpen} // Update visibility based on state
        width={600} // Adjust width as needed
        onCancel={() => {
          setEditPasswordModalState(false);
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
              {!verified && !success && (
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
              {verified && !success && (
                <>
                  <p className="text-gray-600 mb-2">Enter New Password</p>
                  {errorMessage && (
                    <p className="text-red-500 mb-2">{errorMessage}</p>
                  )}
                  <Input.Password
                    min={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new email"
                  />
                  <Input.Password
                    min={6}
                    className="mt-2"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    placeholder="Confirm Password"
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
              {success && (
                <div className="flex justify-center items-center text-green-500">
                  <IoIosCheckmarkCircle size={30} />
                  <p className="ml-2">Success!</p>
                </div>
              )}
            </div>
          </div>
        </Spin>
      </Modal>
    </>
  );
}
