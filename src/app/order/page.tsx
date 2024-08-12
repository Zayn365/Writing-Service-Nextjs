"use client";
import { useState } from "react";
import BottomField from "@/components/order/BottomField";
import React from "react";
import { useAppContext } from "@/context/AppContext";
import ToastProvider from "@/utils/Toast";

const Order = () => {
  const { user } = useAppContext();
  const [form, setForm] = useState({
    name: user ? user?.name : "",
    email: user ? user?.email : "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  return (
    <div className="w-10/12 mx-auto">
      <div className="h-full w-full mx-auto">
        <div className="bg-[#F97E1A] p-2  ">
          <span className="text-lg text-white font-bold ">Add Project</span>
        </div>
        <div className="w-full flex my-5 flex-wrap justify-between items-center gap-5">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) =>
              setForm((prev: any) => {
                return { ...prev, name: e.target.value };
              })
            }
            value={form?.name}
            disabled={user?.name}
            className="outline-none border p-1 w-[30%]"
          />
          <input
            type="email"
            placeholder="Email"
            className="outline-none border p-1 w-[30%]"
            required
            onChange={(e) =>
              setForm((prev: any) => {
                return { ...prev, email: e.target.value };
              })
            }
            value={form?.email}
            disabled={user?.email}
          />
          <input
            type="text"
            placeholder="Street Address"
            className="outline-none border p-1 w-[30%]"
            required
            onChange={(e) =>
              setForm((prev: any) => {
                return { ...prev, address: e.target.value };
              })
            }
            value={form?.address}
          />
          <input
            type="number"
            placeholder="Zip Code"
            className="outline-none border p-1 w-[30%]"
            required
            onChange={(e) =>
              setForm((prev: any) => {
                return { ...prev, postalCode: e.target.value };
              })
            }
            value={form?.postalCode}
          />
          <input
            type="text"
            placeholder="City"
            className="outline-none border p-1 w-[30%]"
            required
            onChange={(e) =>
              setForm((prev: any) => {
                return { ...prev, city: e.target.value };
              })
            }
            value={form?.city}
          />
          <input
            type="text"
            placeholder="Country"
            className="outline-none border p-1 w-[30%]"
            required
            onChange={(e) =>
              setForm((prev: any) => {
                return { ...prev, country: e.target.value };
              })
            }
            value={form?.country}
          />
        </div>
        <hr />
        <BottomField firstData={form} />
      </div>
      <ToastProvider />
    </div>
  );
};

export default Order;
