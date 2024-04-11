import { Table, TableColumnsType, TableProps } from "antd";
import moment from "moment";

interface transactionTableDataType {
  amount: number;
  date: Date;
  reciever: string;
  context: string;
}

export const transactionTableColumns: TableColumnsType<transactionTableDataType> =
  [
    {
      title: "Context",
      dataIndex: "context",
      key: "context",
    },
    {
      title: "Amount",
      render: (_, record, index) => {
        return <div key={index}>{record.amount}$</div>;
      },
      sorter: {
        compare: (a, b) => a.amount - b.amount,
      },
      key: "amount",
    },
    {
      title: "Date",
      key: "date",
      width: 250,
      render: (_, record, index) => {
        return (
          <div key={index}>
            {moment(record.date).format("ddd, MMM D, YYYY [at] h:mm A")}
          </div>
        );
      },
    },
    {
      title: "To",
      dataIndex: "reciever",
      key: "reciever",
    },
  ];
