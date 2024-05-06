"use client";

import { Button, Modal } from "antd";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import EditEmailModal from "./changeEmailModa";
import { resDataType } from "@/serverHelpers/types";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function EditInformationsModal() {
  const {
    isEditInformationsModalOpen,
    setEditInformationsModalState,
    isEditEmailModalOpen,
    setEditEmailModalState,
  } = useBidderNavigationStore();
  const [loading, setLoading] = useState(false);

  const handleSendRequestCode = async () => {
    setLoading(true);
    const res = await fetch("/api/bidder/email/requestResetCode", {
      method: "PUT",
    });
    const resData: resDataType = await res.json();
    if (resData.success) {
      setEditEmailModalState(true);
    }
    setLoading(false);
  };
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
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
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
              onClick={() => handleSendRequestCode()}
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
        </Spin>
      </Modal>
      {isEditEmailModalOpen && <EditEmailModal />}
    </>
  );
}
