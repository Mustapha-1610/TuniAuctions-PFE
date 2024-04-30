import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { Modal, Table } from "antd";
import { sellerTransactionTableColumns } from "../../seller/transactions/page";

export default function SellerDataModal() {
  const { seller, setSeller, isSellerModalOpen, setSellerModalState } =
    useAdminStore();
  return (
    <>
      <Modal
        title="Reported Delivery Information"
        centered
        open={isSellerModalOpen}
        width={1280} // Increased width for better organization
        onCancel={() => setSellerModalState(false)}
        footer={null}
      >
        {seller && (
          <>
            <Table
              dataSource={seller.transactions.reverse()}
              columns={sellerTransactionTableColumns}
              scroll={{ x: 800 }}
              pagination={{
                position: ["bottomCenter"],
                pageSize: 4,
              }}
              bordered
              className="mr-4"
            />
          </>
        )}
      </Modal>
    </>
  );
}
