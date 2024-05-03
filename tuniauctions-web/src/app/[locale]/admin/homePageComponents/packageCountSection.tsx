"use client";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import { ObjectId } from "mongodb";

type transactions =
  | {
      amount: string;
      date: Date;
      from: string;
      sellerId: ObjectId;
      context: string;
    }[]
  | undefined;
interface Props {
  transactions: transactions;
}
export default function PackageCountSection({ transactions }: Props) {
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
      // Optional function to process transactions on the frontend (e.g., group by month)
      const monthlyEarnings: any = {};
      transactions.forEach((transaction: any) => {
        const month = new Date(transaction.date).getMonth(); // Get month (0-11)
        if (!monthlyEarnings[month]) {
          monthlyEarnings[month] = 0;
        }
        monthlyEarnings[month] += parseFloat(transaction.amount); // Convert amount to a number
      });

      const chartData: any = Object.entries(monthlyEarnings).map(
        ([month, amount]: any) => ({
          month: monthNames[parseInt(month, 10)], // Convert month number to full month name
          earnings: amount,
        })
      );
      return chartData;
    }
  };
  useEffect(() => {
    if (transactions) {
      setData(processData(transactions));
    }
  }, [transactions]);

  return (
    <>
      <div className="bg-white shadow rounded-lg 2xl:col-span-2 flex-col border border-gray-400">
        <h3 className="text-xl font-bold leading-none text-gray-900 text-center w-full mt-2">
          Monthly Earnings
        </h3>
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
      </div>
    </>
  );
}
