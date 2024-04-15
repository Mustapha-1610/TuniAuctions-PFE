"use client";

import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarStore";
import { resDataType } from "@/serverHelpers/types";
import { Modal } from "antd";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  isCongratsModalOpen: boolean;
  setCongratsModal: (value: boolean) => void;
  auctionTitle: string;
}
export default function AuctionCongratsModal({
  auctionTitle,
  isCongratsModalOpen,
  setCongratsModal,
}: Props) {
  const locale = useLocale();
  const router = useRouter();
  return (
    <>
      <Modal
        title="Anautherized Access"
        centered
        open={isCongratsModalOpen}
        width={600}
        footer={null}
        onCancel={() => {
          setCongratsModal(false);
        }}
        maskClosable={false}
      >
        <p>
          Congrats On Winning {auctionTitle} auction!{" "}
          <Link
            onClick={() => {
              setCongratsModal(false);
            }}
            href={`/${locale}/bidder/dashboard`}
          >
            Check it out
          </Link>
        </p>
      </Modal>
    </>
  );
}
