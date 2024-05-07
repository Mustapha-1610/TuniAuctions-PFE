"use client";
import { platformModelType } from "@/models/types/platform";
import { useLocale } from "next-intl";
import Link from "next/link";
import React, { useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
interface Props {
  platformStats: platformModelType | null;
}
export default function PackagePurchases({ platformStats }: Props) {
  const data = [
    { name: "Premium", value: platformStats?.packagesBought.Premium },
    { name: "Standard", value: platformStats?.packagesBought.Standard },
  ];
  const chartData = [
    { name: "Premium", value: platformStats?.packagesBought.Premium },
    { name: "Standard", value: platformStats?.packagesBought.Standard }, // Adjust as needed
    // Adjust as needed
    // ... add more data points as needed
  ];
  const customColors = ["#D31F4A", "#00008B"];
  useEffect(() => {}, [platformStats]);
  const locale = useLocale();
  return (
    <>
      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full border border-gray-400">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Package Earnings Comparison
          </h3>
          <Link
            href={`/${locale}/admin/transactions`}
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </Link>
        </div>
        <div className="flow-root mt-2">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={121} // Adjust the inner radius for a donut chart effect
                outerRadius={140}
                fill="#8884d8"
                label={({ value }) => `$${value.toFixed(2)}`} // Show name and formatted value on the chart
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={customColors[index % customColors.length]}
                  />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" align="center" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
