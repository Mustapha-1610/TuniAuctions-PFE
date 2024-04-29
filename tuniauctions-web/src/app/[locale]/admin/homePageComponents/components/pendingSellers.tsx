"use client";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Table } from "antd";
import { pendingSellersAdminTableColumnsType } from "./components/pendingSellersTable";

interface Props {
  pendingSellers: ISeller[] | null;
}
export default function PendingSellers({ pendingSellers }: Props) {
  return (
    <>
      <div className="bg-white shadow rounded-lg  p-4 sm:p-6 h-full border border-gray-400">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Sellers Pending Approval
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          {pendingSellers && (
            <Table
              className="custom-transaction-table  "
              columns={pendingSellersAdminTableColumnsType}
              dataSource={pendingSellers}
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
