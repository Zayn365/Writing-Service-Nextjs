"use client";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const Header = ({ text }: any) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const cookie = Cookies.get("user");
    if (cookie && cookie !== "undefined") {
      try {
        const parsed = JSON.parse(cookie);
        setData(parsed);
        if (parsed?.userType === "user") {
          window.location.href = "/";
        }
      } catch (e) {
        console.error("Invalid user cookie JSON:", e);
      }
    }
  }, []);

  return (
    <div className="w-full p-2 mb-2 capitalize border-black border bg-orange-700 text-center text-white text-lg">
      {text}
    </div>
  );
};

export default Header;
