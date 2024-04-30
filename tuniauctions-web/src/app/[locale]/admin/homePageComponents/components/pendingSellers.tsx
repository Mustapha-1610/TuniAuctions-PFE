"use client";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Table, TableColumnsType, TableProps } from "antd";
import { pendingSellersAdminTableColumnsType } from "./components/pendingSellersTable";
import { useState } from "react";
import SellerAccountApplicationModal from "../../modals/sellerApplicationModal";

interface Props {
  pendingSellers: ISeller[] | null;
}
export default function PendingSellers({ pendingSellers }: Props) {
  const [
    isSellerAccountApplicationModalOpen,
    setSellerAccountApplicationModalState,
  ] = useState(false);
  const [sellerAccount, setSellerAccount] = useState<ISeller>();
  const pendingSellersAdminTableColumnsType: TableColumnsType<ISeller> = [
    {
      title: "Seller Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      align: "center",
    },
    {
      title: "Location",
      width: 120,
      align: "center",
      children: [
        {
          title: "City",
          render: (_, record) => {
            return record.location.city;
          },
          align: "center",
        },
        {
          title: "Municipality",
          render: (_, record) => {
            return record.location.municipality;
          },
          align: "center",
        },
        {
          title: "Street",
          render: (_, record) => {
            return record.location.street;
          },
          align: "center",
        },
      ],
    },
    {
      title: "Action",
      align: "center",
      render: (_, record) => {
        return (
          <p
            className="cursor-pointer"
            onClick={() => {
              setSellerAccountApplicationModalState(true);
              setSellerAccount(record);
            }}
          >
            View Application
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
      {isSellerAccountApplicationModalOpen && sellerAccount && (
        <SellerAccountApplicationModal
          isSellerAccountApplicationModalOpen={
            isSellerAccountApplicationModalOpen
          }
          sellerData={sellerAccount}
          setSellerAccountApplicationModalState={
            setSellerAccountApplicationModalState
          }
        />
      )}
    </>
  );
}
