"use client";
import * as React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
export default function MyComponent() {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      width: 300,
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      render: (avatar) => (
        <div className="flex flex-rows ">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
            alt="Avatar"
            style={{ width: "75px", height: "75px", borderRadius: "10%" }}
          />
          <p className="pl-2 ">Text </p>
        </div>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  interface AuctionItemData {
    imageSrc: string;
    altText: string;
    title: string;
    startDate: string;
    lockedBalance: string;
  }

  interface AuctionItemProps {
    item: AuctionItemData;
  }

  const auctionData: AuctionItemData[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 1",
      title: "Auction Title Example 1",
      startDate: "Auction Starts 16/08/2002",
      lockedBalance: "300.000$",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 2",
      title: "Auction Title Example 2",
      startDate: "Auction Starts 17/08/2002",
      lockedBalance: "350.000$",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/44e7c9cc674535cf9ee1aee3510c308622af02a0e40aec1e3d50db111bfb2912?apiKey=452d394c7c1e42459c0e2415b6f84ad2&",
      altText: "Auction Item Description for Item 3",
      title: "Auction Title Example 3 aaaaaaaaa aaaa",
      startDate: "Auction Starts 18/08/2002",
      lockedBalance: "400.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
    {
      imageSrc:
        "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg",
      altText: "Auction Item Description for Item 4",
      title: "Auction Title Example 4",
      startDate: "Auction Starts 19/08/2002",
      lockedBalance: "450.000$",
    },
  ];

  const AuctionItem: React.FC<AuctionItemProps> = ({ item }) => (
    <section className="flex flex-col md:flex-row gap-5 justify-between px-3.5 py-3.5 mt-5 w-full rounded-2xl border-2 border-white border-solid">
      <div className="flex flex-col md:flex-row gap-4 items-start w-full">
        <div
          className="flex-shrink-0 bg-gray-200 rounded-xl border border-white overflow-hidden"
          style={{ width: "104px", height: "104px" }}
        >
          <img
            loading="lazy"
            src={item.imageSrc}
            className="object-cover w-full h-full"
            alt={item.altText}
          />
        </div>
        <div className="flex flex-col flex-grow my-auto tracking-tighter text-black">
          <h3 className="text-xl font-bold leading-10 whitespace-normal overflow-hidden text-ellipsis">
            {item.title}
          </h3>
          <p className="mt-3 text-sm font-medium leading-10">
            {item.startDate}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center my-auto font-bold tracking-tighter text-right md:text-left">
        <p className="text-base leading-2 md:mr-3">
          Locked Balance {item.lockedBalance}
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-2.5 text-xs leading-2">
          <button className="px-3 py-2.5 rounded bg-neutral-400 text-black">
            Cancel
          </button>
          <button
            className="px-4 py-2.5 text-white bg-blue-700 rounded"
            tabIndex={0}
          >
            Add Funds
          </button>
        </div>
      </div>
    </section>
  );
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(auctionData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = auctionData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex mt-24 flex-col justify-center px-8 bg-white max-md:px-2">
      <div className="mx-10 bg-white border border-white border-solid max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col  justify-between px-4 pt-4 pb-20 w-full text-sm font-medium  whitespace-nowrap bg-white border border-white border-solid text-neutral-900 max-md:pr-5">
              <div className="justify-center items-start py-2 pr-16 pl-3 rounded-lg bg-slate-200 max-md:pr-5">
                Auctions
              </div>
              <div className="self-start mt-4 ml-3 max-md:ml-2.5">
                Deliveries
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col self-stretch my-auto text-sm font-bold max-md:mt-10 max-md:max-w-full">
              <div className="pt-11 text-3xl tracking-tighter border border-white border-solid text-neutral-900 max-md:max-w-full">
                Auctions{" "}
              </div>
              <div className="flex overflow-hidden relative flex-col pt-2 pb-10 mt-8 w-full tracking-wide text-center whitespace-nowrap border border-white border-solid leading-[150%] min-h-[127px] stroke-[1px] stroke-white max-md:max-w-full">
                <div className="flex relative flex-col pb-3 pl-4 border border-white border-solid max-md:max-w-full">
                  <div className="flex gap-0 justify-between py-px border-b border-solid border-slate-300 max-md:flex-wrap max-md:max-w-full">
                    <div className="grow justify-center items-center px-16 py-4 border-gray-200 border-solid border-b-[3px] text-neutral-900 w-fit max-md:px-5 max-md:max-w-full">
                      Auctions
                    </div>
                    <div className="grow justify-center items-center px-16 py-4 text-blue-800 border-gray-200 border-solid border-b-[3px] w-fit max-md:px-5 max-md:max-w-full">
                      Deliveries
                    </div>
                  </div>
                </div>
              </div>
              <div className=" rounded-lg">
                <Table
                  className="rounded-lg "
                  columns={columns.map((column) => ({
                    ...column,
                    className: "text-black bg-gray-300",
                  }))}
                  dataSource={data}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
