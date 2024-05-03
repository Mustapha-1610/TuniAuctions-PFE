"use client";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { platformModelType } from "@/models/types/platform";
import { ObjectId } from "mongodb";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface Props {
  platformStats: platformModelType;
}
interface TransactionsType {
  amount: string;
  date: Date;
  from: string;
  sellerId: ObjectId;
  context: string;
}
[];
export default function PlatformTransactionsTable({ platformStats }: Props) {
  const { setSeller, setSellerModalState } = useAdminStore();
  const [loading, setLoading] = useState(false);
  async function fetchSellerData(sellerId: string) {
    setLoading(true);
    const res = await fetch("/api/admin/fetchSellerData", {
      method: "POST",
      body: JSON.stringify({
        sellerId,
      }),
    });
    const resData = await res.json();
    setLoading(false);

    if (resData) {
      setSeller(resData);
      setSellerModalState(true);
    }
  }
  useEffect(() => {}, [platformStats]);

  const PlatformTransactionsColumn: TableColumnsType<TransactionsType> = [
    {
      title: "Amount",
      width: 80,
      align: "center",
      render: (_, record) => {
        return record.amount + "$";
      },
    },
    {
      title: "Transaction Date",
      width: 350,
      align: "center",
      render: (value, record, index) => {
        return moment(record.date).format("ddd, MMM D, YYYY [at] h:mm A");
      },
    },
    {
      title: "Context",
      align: "center",
      width: 290,
      dataIndex: "context",
    },
    {
      title: "Seller Data",
      width: 190,
      align: "center",
      children: [
        {
          title: "Name",
          dataIndex: "from",
          align: "center",
        },
        {
          title: "Id",
          width: 90,
          render: (_, record) => {
            return String(record.sellerId);
          },
          align: "center",
        },
        {
          title: "Action",
          render: (_, record) => {
            return (
              <>
                <p
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    fetchSellerData(String(record.sellerId));
                  }}
                >
                  View Seller
                </p>
              </>
            );
          },
          align: "center",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex ml-2 overflow-hidden pt-8">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <div className="flex items-center justify-center mb-2">
            <h1 className="text-2xl font-bold mb-2 mr-2">Transactions Table</h1>
            <MdOutlinePendingActions size={30} />
          </div>

          {platformStats && (
            <>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                spinning={loading}
              >
                <Table
                  columns={PlatformTransactionsColumn}
                  dataSource={platformStats.transactions}
                  scroll={{ x: 800 }}
                  pagination={{
                    position: ["bottomCenter"],
                    pageSize: 10,
                  }}
                  className="mr-2"
                  bordered
                />
              </Spin>
            </>
          )}
        </div>
      </div>
    </>
  );
}
