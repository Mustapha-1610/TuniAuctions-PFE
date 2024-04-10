"use client";

import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarStore";
import { resDataType } from "@/serverHelpers/types";
import { Modal } from "antd";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function UnautherizedModal() {
  const { isAnautherizedModalOpen, setAnautherizedModalState } =
    useBidderNavbarState();
  const locale = useLocale();
  const router = useRouter();
  async function handleLogout() {
    const res = await fetch("/api/bidder/signout", {
      method: "POST",
    });
    const resData: resDataType = await res.json();
    if (resData.success) {
      setAnautherizedModalState();
      router.push(`/${locale}`);
    }
  }

  return (
    <>
      <Modal
        title="Anautherized Access"
        centered
        open={isAnautherizedModalOpen}
        width={600}
        footer={null}
        onCancel={handleLogout}
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
