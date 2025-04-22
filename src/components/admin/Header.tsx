"use client";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
const Header = ({ text }: any) => {
  const data: any = JSON.parse(Cookies.get("user"));
  useEffect(() => {
    if (data && data?.userType === "user") {
      window.location.href = "/";
    }
  }, [data]);
  return (
    <div className="w-full p-2 mb-2 capitalize border-black border bg-orange-700  text-center text-white text-lg">
      {text}
    </div>
  );
};

export default Header;
