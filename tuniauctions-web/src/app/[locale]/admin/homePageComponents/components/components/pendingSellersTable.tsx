import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Table, TableColumnsType, TableProps } from "antd";
import moment from "moment";

export const pendingSellersAdminTableColumnsType: TableColumnsType<ISeller> = [
  {
    title: "Seller Name",
    dataIndex: "name",
    key: "name",
    width: 150,
    align: "center",
  },
  {
    title: "Location",
    width: 120,
    align: "center",
    children: [
      {
        title: "City",
        render: (_, record) => {
          return record.location.city;
        },
        align: "center",
      },
      {
        title: "Municipality",
        render: (_, record) => {
          return record.location.municipality;
        },
        align: "center",
      },
      {
        title: "Street",
        render: (_, record) => {
          return record.location.street;
        },
        align: "center",
      },
    ],
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
          View Application
        </p>
      );
    },
  },
];
