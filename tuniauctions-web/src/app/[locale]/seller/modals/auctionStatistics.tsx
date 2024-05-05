"use client";
import { useSellerStore } from "@/helpers/store/seller/sellerStore";
import { Modal, Typography } from "antd";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const { Title, Text } = Typography;

export default function AuctionStatisticsModal() {
  const {
    auction,
    isAuctionStatisticsModalOpen,
    setAuctionStatisticsModalState,
  } = useSellerStore();

  // Calculate total views
  const totalViews = auction?.uniqueViews.bidders.length || 0;

  const chartData = [
    { name: "Female", value: auction?.uniqueViews.gender.Female || 0 },
    { name: "Male", value: auction?.uniqueViews.gender.Male || 0 },
  ];

  const customColors = ["#DE3163", "#20A7DB"]; // Specify custom colors

  return (
    <Modal
      title="Auction Statistics"
      centered
      visible={isAuctionStatisticsModalOpen} // Changed from 'open' to 'visible'
      width={1280}
      onCancel={() => setAuctionStatisticsModalState(false)}
      footer={null}
    >
      <div className="bg-white shadow rounded-lg p-2 sm:p-6 xl:p-8 border border-gray-400">
        <div className="">
          <div>
            <Title level={3}>Unique Views Gender Distribution</Title>
            <ResponsiveContainer width="100%" height={350} className="mt-12">
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
                  label={({ value }) =>
                    `${value} (${((value / totalViews) * 100).toFixed(2)}%)`
                  } // Show name, value, and percentage on the chart
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={customColors[index % customColors.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8">
            <Title level={3}>Total Views</Title>
            <Text>{totalViews}</Text>
          </div>
        </div>
      </div>
    </Modal>
  );
}
