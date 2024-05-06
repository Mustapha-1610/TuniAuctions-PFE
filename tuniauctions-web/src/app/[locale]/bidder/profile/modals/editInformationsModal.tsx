"use client";

import { Button, Modal } from "antd";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import EditEmailModal from "./changeEmailModa";

export default function EditInformationsModal() {
  const {
    isEditInformationsModalOpen,
    setEditInformationsModalState,
    isEditEmailModalOpen,
    setEditEmailModalState,
  } = useBidderNavigationStore();

  return (
    <>
      <Modal
        title="Bidder Information"
        centered
        open={isEditInformationsModalOpen}
        width={400}
        onCancel={() => setEditInformationsModalState(false)}
        footer={null}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col space-y-4">
          <Button
            type="dashed"
            className="w-full"
            onClick={() => console.log("Change Name Clicked")}
          >
            Edit Name
          </Button>
          <Button
            type="dashed"
            className="w-full"
            onClick={() => setEditEmailModalState(true)}
          >
            Edit Email
          </Button>
          <Button
            type="dashed"
            className="w-full"
            onClick={() => console.log("Change Password Clicked")}
          >
            Edit Password
          </Button>
        </div>
      </Modal>
      {isEditEmailModalOpen && <EditEmailModal />}
    </>
  );
}
