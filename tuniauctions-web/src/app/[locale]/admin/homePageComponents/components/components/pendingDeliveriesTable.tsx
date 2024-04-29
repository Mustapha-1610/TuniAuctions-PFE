import { DeliveryType } from "@/models/types/delivery";
import { TableColumnsType } from "antd";
import moment from "moment";

export const pendingDeliveriesAdminTableColmumnTable: TableColumnsType<DeliveryType> =
  [
    {
      title: "Seller Id",
      width: 80,
      dataIndex: "sellerId",
      align: "center",
    },
    {
      title: "Delivery Date",
      align: "center",
      render: (_, record) => {
        return (
          <>
            {!record.deliveryDate && record.expectedDeliveryDate && (
              <>
                from :{" "}
                {moment(record.expectedDeliveryDate.from).format(
                  "dddd, MMMM D, YYYY "
                )}
                , to :{" "}
                {moment(record.expectedDeliveryDate.to).format(
                  "dddd, MMMM D, YYYY  "
                )}
              </>
            )}
            {record.deliveryDate &&
              moment(record.deliveryDate).format("dddd, MMMM D, YYYY hh:mm A ")}
          </>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
    },
    {
      title: "Action",
      align: "center",
      render: (_, record) => {
        return (
          <p
            onClick={() => {
              console.log(record._id);
            }}
          >
            View
          </p>
        );
      },
    },
  ];
