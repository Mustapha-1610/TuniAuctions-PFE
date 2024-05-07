"use client";

import { Button, Modal } from "antd";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import EditEmailModal from "./changeEmailModa";
import { resDataType } from "@/serverHelpers/types";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import EditNameModal from "./changeNameModal";
import EditPasswordModal from "./changePasswordModal";

export default function EditInformationsModal() {
  const {
    isEditInformationsModalOpen,
    setEditInformationsModalState,
    isEditEmailModalOpen,
    setEditEmailModalState,
    setEditNameModalState,
    isEditNameModalOpen,
    setEditPasswordModalState,
    isEditPasswordModalOpen,
  } = useBidderNavigationStore();
  const [loading, setLoading] = useState(false);

  const handleResetMailRequestCode = async () => {
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
  async function handleResetPasswordRequestCode() {
    setLoading(true);
    const res = await fetch("/api/bidder/password/requestResetCode", {
      method: "PUT",
    });
    const resData: resDataType = await res.json();
    if (resData.success) {
      setEditPasswordModalState(true);
    }
    setLoading(false);
  }

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
              onClick={() => setEditNameModalState(true)}
            >
              Edit Name
            </Button>
            <Button
              type="dashed"
              className="w-full"
              onClick={() => handleResetMailRequestCode()}
            >
              Edit Email
            </Button>
            <Button
              type="dashed"
              className="w-full"
              onClick={() => handleResetPasswordRequestCode()}
            >
              Edit Password
            </Button>
          </div>
        </Spin>
      </Modal>
      {isEditEmailModalOpen && <EditEmailModal />}
      {isEditNameModalOpen && <EditNameModal />}
      {isEditPasswordModalOpen && <EditPasswordModal />}
    </>
  );
}
