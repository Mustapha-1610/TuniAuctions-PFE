"use client";
import { platformModelType } from "@/models/types/platform";
import React, { useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
interface Props {
  platformStats: platformModelType | null;
}
export default function PackagePurchases({ platformStats }: Props) {
  const data = [
    { name: "Standard", value: platformStats?.packagesBought.Standard },
    { name: "Premium", value: platformStats?.packagesBought.Premium },
  ];
  useEffect(() => {}, [platformStats]);
  return (
    <>
      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Package Earnings
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </a>
        </div>
        <div className="flow-root mt-2">
          {platformStats && (
            <BarChart width={700} height={300} data={data} className="mt-4">
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="purple"></Bar>
            </BarChart>
          )}
        </div>
      </div>
    </>
  );
}
