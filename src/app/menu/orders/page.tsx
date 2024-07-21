"use client";
import { headName } from "@/constants/order";
import useData from "@/utils/useData";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [order, setOrder] = useState<any | undefined>();
  const [error, setError] = useState(null);

  const getOrder = (orderData: any) => {
    if (typeof orderData === "string") {
      setError(orderData);
    } else {
      setOrder(orderData);
    }
  };

  const listerns = useData("/api/orders", getOrder);
  useEffect(() => {
    listerns();
  });

  return (
    <div className="py-8 flex justify-center items-center flex-col">
      <h1 className="font-bold uppercase text-lg md:tex-3xl py-8">Orders</h1>
      <div className="overflow-x-auto w-[80%] mx-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headName?.map((item: any, index: any) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {order?.length > 0 ? (
              order?.map((order: any) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.orderNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.totalAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.paymentType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.status === 0 ? "Pending" : "Paid"}
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex w-full justify-center items-center">
                Loading...
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
