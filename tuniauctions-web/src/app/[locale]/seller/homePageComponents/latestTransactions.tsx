"use client";
import React from "react";
import moment from "moment";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";

export default function LatestTransactionsSection() {
  const tableTranslations = useTranslations("seller.transactions");
  const tableHeaderTranslations = useTranslations(
    "seller.transactionTableTitles"
  );
  const locale = useLocale();
  const { sellerLocaleStorageData } = useSellerProfileStore();

  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 border">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Latest Transactions
            </h3>
            <span className="text-base font-normal text-gray-500">
              This is a list of latest transactions
            </span>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={`/${locale}/seller/transactions`}
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {tableHeaderTranslations("context")}
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {tableHeaderTranslations("date")}
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {tableHeaderTranslations("amount")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {sellerLocaleStorageData &&
                      sellerLocaleStorageData.transactions
                        .reverse()
                        .slice(0, 8)
                        .map((item, index) => {
                          return (
                            <React.Fragment key={index}>
                              <tr>
                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                  {tableTranslations(item.context)}
                                </td>
                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                  {moment(item.date).format(
                                    "ddd, MMM D, YYYY [at] h:mm A"
                                  )}
                                </td>
                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                  ${item.amount}
                                </td>
                              </tr>
                            </React.Fragment>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
