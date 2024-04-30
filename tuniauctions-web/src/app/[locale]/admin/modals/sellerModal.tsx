import { Modal, Table, Image, Tag } from "antd";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { sellerTransactionTableColumns } from "../../seller/transactions/page";
import { useAdminStore } from "@/helpers/store/admin/adminStore";

export default function SellerDataModal() {
  const { seller, setSeller, isSellerModalOpen, setSellerModalState } =
    useAdminStore();
  return (
    <Modal
      title="Seller Information"
      centered
      open={isSellerModalOpen}
      width={1240}
      onCancel={() => setSellerModalState(false)}
      footer={null}
    >
      {seller && (
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="lg:w-1/2 flex flex-col items-center gap-4">
            <div className="w-full border border-gray-200 p-4">
              <p>
                <strong>Seller ID:</strong> {String(seller._id)}
              </p>
              <p>
                <strong>Name:</strong> {seller.name}
              </p>
              <p>
                <strong>Email:</strong> {seller.email}
              </p>
              <p>
                <strong>Description:</strong> {seller.description}
              </p>
              <p>
                <strong>Location:</strong> {seller.location.city},{" "}
                {seller.location.municipality}, {seller.location.street}
              </p>
              <p>
                <strong>Registration License:</strong>{" "}
                <Image
                  src={seller.registrationLicense}
                  preview={true}
                  className="w-32 h-32 rounded-lg"
                />
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-4">
            {/* Earnings */}
            <div className="w-full border border-gray-200 p-4">
              <p>
                <strong>Earnings:</strong> ${seller.earnnings.toFixed(2)}
              </p>
              <p>
                <strong>Platform Fees:</strong> $
                {seller.platformFees.toFixed(2)}
              </p>
            </div>

            {/* Created Auctions */}
            <div className="w-full border border-gray-200 p-4">
              <p>
                <strong>Created Auctions:</strong>
              </p>
              <p>
                <strong>Upcoming:</strong>{" "}
                {seller.createdAuctions.upcoming.length}
              </p>
              <p>
                <strong>Finished:</strong>{" "}
                {seller.createdAuctions.finished.length}
              </p>
            </div>

            {/* Deliveries */}
            <div className="w-full border border-gray-200 p-4">
              <p>
                <strong>Deliveries:</strong>
              </p>
              <p>
                <strong>Pending:</strong> {seller.deliveries.pending.length}
              </p>
              <p>
                <strong>Delivered:</strong> {seller.deliveries.delivered.length}
              </p>
            </div>

            {/* Auction Earnings */}
            <div className="w-full border border-gray-200 p-4">
              <p>
                <strong>Auction Earnings:</strong>
              </p>
              <p>
                <strong>Premium:</strong> $
                {seller.auctionEarnings.Premium.toFixed(2)}
              </p>
              <p>
                <strong>Standard:</strong> $
                {seller.auctionEarnings.Standard.toFixed(2)}
              </p>
              <p>
                <strong>Basic:</strong> $
                {seller.auctionEarnings.Basic.toFixed(2)}
              </p>
            </div>

            {/* Status */}
            <div className="w-full border border-gray-200 p-4">
              <p>
                <strong>Status:</strong>
              </p>
              <Tag color={seller.disabled ? "error" : "success"}>
                {seller.disabled ? "Disabled" : "Enabled"}
              </Tag>
              <Tag color={seller.verified ? "success" : "default"}>
                {seller.verified ? "Verified" : "Not Verified"}
              </Tag>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Table */}
      {seller && (
        <Table
          dataSource={seller.transactions.reverse()}
          columns={sellerTransactionTableColumns}
          scroll={{ x: 800 }}
          pagination={{ position: ["bottomCenter"], pageSize: 4 }}
          bordered
          className="mt-8"
        />
      )}
    </Modal>
  );
}
