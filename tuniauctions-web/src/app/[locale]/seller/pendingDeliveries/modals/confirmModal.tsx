import React, { useState, useEffect } from "react";
import { Modal, Select } from "antd";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import { DeliveryType } from "@/models/types/delivery";

// Optional: Set locale for datepicker (e.g., 'en-US')
registerLocale("en-US", require("date-fns/locale/en-US")); // Import locale

interface Props {
  deliveryId: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setTableData: (value: DeliveryType[] | undefined) => void;
}

export default function ConfirmModal({
  deliveryId,
  setShowModal,
  showModal,
  setTableData,
}: Props) {
  const [selectedFromDate, setSelectedFromDate] = useState<Date | null>(null);
  const [selectedToDate, setSelectedToDate] = useState<Date | null>(null);
  const [minToDate, setMinToDate] = useState<Date | null>(null);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setlOading] = useState(false);
  useEffect(() => {
    // Update minToDate when selectedFromDate changes
    setMinToDate(selectedFromDate);
  }, [selectedFromDate]);

  const handleFromDateChange = (date: Date | null) => {
    setSelectedFromDate(date);
  };

  const handleToDateChange = (date: Date | null) => {
    // Ensure toDate is not before fromDate
    setSelectedToDate(date && date >= selectedFromDate! ? date : null);
  };
  async function confirmDeliveryShipment() {
    if (selectedFromDate && selectedToDate) {
      setlOading(true);
      setErrMessage("");
      const res = await fetch("/api/seller/Confirmdeliveryshipment", {
        method: "PUT",
        body: JSON.stringify({
          from: selectedFromDate,
          to: selectedToDate,
          deliveryId,
        }),
      });
      const resData = await res.json();
      if (resData.success) {
        setTableData(resData.deliveries);
        setShowModal(false);
      }
    } else {
      setErrMessage("Provide Expected Delivery Date");
    }
    setlOading(false);
  }
  return (
    <>
      <Modal
        title="Confirm Delivery Shipment"
        open={showModal}
        onOk={() => {
          // Handle form submission or logic here
          setShowModal(false);
        }}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={false}
        width={800}
      >
        {errMessage && <p className="text-red-700">{errMessage}</p>}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="px-4 py-2 w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <label htmlFor="from-date">From : </label>
            <DatePicker
              id="from-date"
              selected={selectedFromDate}
              onChange={handleFromDateChange}
              dateFormat="dd/MM/yyyy" // Customize date format if needed
              // Optional: Disable past dates (adjust as needed)
              // disabled={date => date.isBefore(new Date())}
              // For a more comprehensive date filtering, consider a custom hook
            />
          </div>
          <div className="px-4 py-2 w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <label htmlFor="to-date">To : </label>
            <DatePicker
              id="to-date"
              selected={selectedToDate}
              onChange={handleToDateChange}
              dateFormat="dd/MM/yyyy" // Customize date format if needed
              minDate={minToDate} // Disable dates before selectedFromDate
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg"
          disabled={loading}
          onClick={confirmDeliveryShipment}
        >
          {loading ? "Loading ..." : "Confirm"}
        </button>
      </Modal>
    </>
  );
}
