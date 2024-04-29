"use client";
import { Table } from "antd";
import { DeliveryType } from "@/models/types/delivery";
import { pendingDeliveriesAdminTableColmumnTable } from "./components/pendingDeliveriesTable";
interface Props {
  pendingDeliveries: DeliveryType[] | null;
}
export default function PendingDeliveries({ pendingDeliveries }: Props) {
  return (
    <>
      <div className="bg-white shadow rounded-lg  p-4 sm:p-6 h-full border border-gray-400">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Pending Deliveries
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </a>
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
