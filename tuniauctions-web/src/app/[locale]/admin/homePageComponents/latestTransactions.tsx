"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface Props {
  activeFemaleBidders: number;
  activeMaleBidders: number;
}
export default function GenderDistributionChart({
  activeFemaleBidders,
  activeMaleBidders,
}: Props) {
  const chartData = [
    { name: "Female", value: activeFemaleBidders }, // Adjust as needed
    { name: "Male", value: activeMaleBidders }, // Adjust as needed
    // ... add more data points as needed
  ];

  const customColors = ["#f44336", "#03a9f4"]; // Specify custom colors

  return (
    <div className="bg-white shadow rounded-lg p-2 sm:p-6 xl:p-8 border">
      <div className="">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Active Bidders Gender Distribution
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={121} // Adjust the inner radius for a donut chart effect
                outerRadius={140}
                fill="#8884d8"
                label={({ value }) => `${value} `} // Show name and value on the chart
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
    </div>
  );
}
