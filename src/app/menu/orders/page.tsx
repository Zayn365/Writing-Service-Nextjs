"use client";
import { headName } from "@/constants/order";
import useData from "@/utils/useData";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [order, setOrder] = useState<any | undefined>();
  const [error, setError] = useState(null);
  const [next , setNext] = useState<any>(9);
  const [prev , setPrev] = useState<any>(0);

  const handleNext = () => {
    if(order?.length > next)
    setNext(next + 10);
    setPrev(prev + 10);
  }
  const handlePrev = () => {
    if(next >= 9)
    setPrev(prev - 10);
    setNext(next - 10);
  }
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
              order?.slice(prev,next)?.map((order: any) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.order_no}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.user_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  ${order.original_amount} 
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.payment_type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.status === 0 ? "Pending" : "Paid"}
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex w-full text-center justify-center items-center">
                Loading...
              </div>
            )}
          </tbody>
        </table>
        
      </div>
      {order?.length > 0 && <div className="flex justify-center items-center">
        <div className="my-10 flex justify-between items-center">
          <button disabled={prev === 0} onClick={handlePrev} className="rounded-lg px-8 py-3 bg-black hover:bg-gray-800 text-white text-bold uppercase disabled:bg-blue-gray-300  disabled:hover:bg-blue-gray-500">Previous</button>
          <span className="px-5"><p>{prev + 1} / {next + 1}</p></span>
          <button disabled={next === order?.length} onClick={handleNext} className="rounded-lg px-8 py-3 bg-black hover:bg-gray-800 text-white text-bold uppercase disabled:bg-blue-gray-300  disabled:hover:bg-blue-gray-500">Next</button>
        </div>
        </div>}
      
    </div>
  );
  
};

export default Orders;
