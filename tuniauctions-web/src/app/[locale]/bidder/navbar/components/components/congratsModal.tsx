"use client";
import { Modal } from "antd";
import { useLocale } from "next-intl";
import Link from "next/link";

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
  return (
    <>
      <Modal
        title="🎉Congratulations🎉"
        centered
        open={isCongratsModalOpen}
        width={600}
        footer={null}
        onCancel={() => {
          setCongratsModal(false);
        }}
        maskClosable={false}
      >
        <div className="flex flex-col items-center">
          <p className="text-center mb-4">
            You ve won {auctionTitle} auction! The winning bid amount will be
            deducted from your balance. Please provide your delivery details to
            the seller to initiate the shipping process.
          </p>
          <Link
            onClick={() => {
              setCongratsModal(false);
            }}
            className=" px-16 py-3 bg-gray-800 text-white rounded-lg text-center"
            href={`/${locale}/bidder/dashboard`}
          >
            Check it out
          </Link>
        </div>
      </Modal>
    </>
  );
}
