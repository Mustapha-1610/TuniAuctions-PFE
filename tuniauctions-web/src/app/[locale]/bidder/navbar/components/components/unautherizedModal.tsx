"use client";

import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarStore";
import { resDataType } from "@/serverHelpers/types";
import { Modal } from "antd";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function UnautherizedModal() {
  const { isAnautherizedModalOpen, setAnautherizedModalState } =
    useBidderNavbarState();

  return (
    <>
      <Modal
        title="Anautherized Access"
        centered
        open={isAnautherizedModalOpen}
        width={600}
        footer={null}
        onCancel={setAnautherizedModalState}
        maskClosable={false}
      >
        <p>
          Your Account has been accessed from a different browser, you will be
          redirected to home page
        </p>
      </Modal>
    </>
  );
}
