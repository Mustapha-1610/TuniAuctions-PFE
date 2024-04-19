import { Modal, Select } from "antd";

interface Props {
  deliveryId: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
export default function ConfirmModal({
  deliveryId,
  setShowModal,
  showModal,
}: Props) {
  return (
    <>
      <Modal
        title="Confirm Delivery State"
        open={showModal}
        onOk={() => {
          setShowModal(false);
        }}
        onCancel={() => {
          setShowModal(false);
        }}
      >
        <p>Choose the next delivery state:</p>
      </Modal>
    </>
  );
}
