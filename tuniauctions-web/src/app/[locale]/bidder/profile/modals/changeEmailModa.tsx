// Import required modules
"use client";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { Modal, Input, Button } from "antd";
import { useState } from "react";

// Define the component
export default function EditEmailModal() {
  // State variables
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const {
    isEditEmailModalOpen,
    setEditEmailModalState,
    setEditInformationsModalState,
  } = useBidderNavigationStore();

  // Function to handle form submission
  const handleSubmit = () => {
    setVerified(true);
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
      >
        {/* Modal content */}
        <div className="flex justify-center items-center">
          {/* Left column */}
          <div className="flex flex-col w-1/2 p-4">
            {!verified && (
              <>
                <p className="text-gray-600 mb-2">
                  Verification Code Sent to Email
                </p>
                <Input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter verification code"
                />
              </>
            )}
            {verified && (
              <Input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter new email"
              />
            )}
          </div>
        </div>
        {/* Button in the middle with green dashed border */}
        <div className="flex justify-center mt-1">
          <Button
            color="green"
            style={{
              color: "green",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}
