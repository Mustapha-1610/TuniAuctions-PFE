"use client";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { ObjectId } from "mongodb";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";

type transactions =
  | {
      amount: number;
      date: Date;
      reciever: string;
      context: string;
    }[]
  | undefined;
export default function PackageCountSection() {
  const { sellerLocaleStorageData } = useSellerProfileStore();

  const [data, setData] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const processData = (transactions: transactions) => {
    if (transactions) {
      const monthlyEarnings: any = {};
      transactions.forEach((transaction: any) => {
        if (transaction.reciever === "Me") {
          const month = new Date(transaction.date).getMonth();
          if (!monthlyEarnings[month]) {
            monthlyEarnings[month] = 0;
          }
          monthlyEarnings[month] += parseFloat(transaction.amount);
        }
      });

      const chartData: any = Object.entries(monthlyEarnings).map(
        ([month, amount]: any) => ({
          month: monthNames[parseInt(month, 10)],
          earnings: amount,
        })
      );
      return chartData;
    }
  };

  useEffect(() => {
    if (sellerLocaleStorageData && sellerLocaleStorageData.transactions) {
      setData(processData(sellerLocaleStorageData.transactions));
    }
  }, [sellerLocaleStorageData]);

  return (
    <>
      <div className="bg-white shadow rounded-lg 2xl:col-span-2 flex-col border ">
        <h3 className="text-xl font-bold leading-none text-gray-900 text-center w-full mt-2">
          Monthly Earnings
        </h3>
        {data.length > 0 ? (
          <BarChart width={1000} height={500} data={data} className="mt-2">
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#46a683">
              <LabelList
                dataKey="earnings"
                position="top"
                formatter={(value: number) => `$${value.toFixed(2)}`}
                className="font-bold text-black" // Add dollar sign and format amount
              />
            </Bar>
          </BarChart>
        ) : (
          <div className="flex items-center justify-center h-40 text-xl font-bold text-gray-600">
            No Earnings Yet
          </div>
        )}
      </div>
    </>
  );
}
