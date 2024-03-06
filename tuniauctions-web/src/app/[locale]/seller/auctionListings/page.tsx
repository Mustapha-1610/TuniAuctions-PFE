"use client";
import React from "react";
import StatisticsSection from "./components/statisticsSection";
import StatisticsTable from "./components/table";

const App: React.FC = () => (
  <div className="flex ml-2 overflow-hidden pt-16">
    <div
      id="main-content"
      className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
    >
      <div className="flex items-center mb-2">
        <h1 className="text-2xl font-bold mb-2 mr-2">Auction Listings</h1>
      </div>

      <StatisticsSection />
      <StatisticsTable />
    </div>
  </div>
);

export default App;
