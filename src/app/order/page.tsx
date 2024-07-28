import BottomField from "@/components/order/BottomField";
import React from "react";

const Order = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="h-full w-full mx-auto">
        <div className="bg-[#F97E1A] p-2  ">
          <span className="text-lg text-white font-bold ">Add Project</span>
        </div>
        <div className="w-full flex my-5 flex-wrap justify-between items-center gap-5">
          <input
            type="text"
            placeholder="Xanthus Vega"
            className="outline-none border p-1 w-[30%]"
          />
          <input
            type="email"
            placeholder="wyfol@gmail.com"
            className="outline-none border p-1 w-[30%]"
          />
          <input
            type="text"
            placeholder="Tanner Buckley"
            className="outline-none border p-1 w-[30%]"
          />
          <input
            type="number"
            placeholder="41772"
            className="outline-none border p-1 w-[30%]"
          />
          <input
            type="text"
            placeholder="Earum est solute et"
            className="outline-none border p-1 w-[30%]"
          />
          <input
            type="text"
            placeholder="unde duis et exercit"
            className="outline-none border p-1 w-[30%]"
          />
        </div>
        <hr />
        <BottomField />
      </div>
    </div>
  );
};

export default Order;
