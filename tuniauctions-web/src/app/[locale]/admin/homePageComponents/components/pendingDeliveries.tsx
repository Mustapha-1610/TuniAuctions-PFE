"use client";
import { Table } from "antd";
import { DeliveryType } from "@/models/types/delivery";
import { TableColumnsType } from "antd";
import moment from "moment";
import { pendingDeliveriesAdminTableColmumnTable } from "./components/pendingDeliveriesTable";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import ReportedDeliveryModal from "../../modals/deliveryModal";
import SellerDataModal from "../../modals/sellerModal";
import { useLocale } from "next-intl";
import Link from "next/link";
interface Props {
  pendingDeliveries: DeliveryType[] | null;
}
export default function PendingDeliveries({ pendingDeliveries }: Props) {
  const { setDeliveryModalState, setDelivery } = useAdminStore();
  const locale = useLocale();

  const pendingDeliveriesAdminTableColmumnTable: TableColumnsType<DeliveryType> =
    [
      {
        title: "Seller Id",
        width: 80,
        dataIndex: "sellerId",
        align: "center",
      },
      {
        title: "Delivery Date",
        align: "center",
        render: (_, record) => {
          return (
            <>
              {!record.deliveryDate && record.expectedDeliveryDate && (
                <>
                  from :{" "}
                  {moment(record.expectedDeliveryDate.from).format(
                    "dddd, MMMM D, YYYY "
                  )}
                  , to :{" "}
                  {moment(record.expectedDeliveryDate.to).format(
                    "dddd, MMMM D, YYYY  "
                  )}
                </>
              )}
              {record.deliveryDate &&
                moment(record.deliveryDate)
                  .locale(locale)
                  .format("dddd, MMMM D, YYYY hh:mm A ")}
            </>
          );
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        align: "center",
      },
      {
        title: "Action",
        align: "center",
        render: (_, record) => {
          return (
            <p
              className="cursor-pointer text-blue-500"
              onClick={() => {
                setDelivery(record);
                setDeliveryModalState(true);
              }}
            >
              View
            </p>
          );
        },
      },
    ];
  return (
    <>
      <div className="bg-white shadow rounded-lg  p-4 sm:p-6 h-full border border-gray-400">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Reported Deliveries
          </h3>
          <Link
            href={`/${locale}/admin/pendingDeliveries`}
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </Link>
        </div>
        <div className="flow-root">
          {pendingDeliveries && (
            <Table
              className="custom-transaction-table  "
              columns={pendingDeliveriesAdminTableColmumnTable}
              dataSource={pendingDeliveries}
              bordered={true}
              size="middle"
              pagination={false}
              tableLayout="auto"
            />
          )}
        </div>
      </div>
    </>
  );
}
