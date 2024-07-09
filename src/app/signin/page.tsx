"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import signIn from "../../../public/image/signin.jpg";
import { Button, Typography } from "@material-tailwind/react";
import { UserHooks } from "@/hooks/UserHooks";
import { useAppContext } from "@/context/AppContext";
import { ToastContainer } from "react-toastify";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { handleSignIn } = UserHooks();
  const { user } = useAppContext();
  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
    <ToastContainer />
    <div className=" py-16 md:py-22 flex items-center justify-center bg-white">
      <div className="flex flex-col lg:flex-row w-11/12 lg:w-3/4 bg-[#F97E1A] rounded-lg overflow-hidden shadow-lg">
        <div className="w-full lg:w-1/2 p-6 flex items-center justify-center relative">
          <Image
            src={signIn}
            alt="Golden human statue"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 bg-gray-700 text-white">
          <div className="mb-4 flex items-center justify-between">
            {/* @ts-ignore */}
            <Typography className="text-2xl lg:text-3xl font-bold">
              Sign In
            </Typography>
            <button className="text-[#F97E1A]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zM9 4h2v5H9zm1 10a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0110 14z"></path>
              </svg>
            </button>
          </div>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              handleSignIn(form);
            }}>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 outline-none rounded bg-gray-600 text-white"
                placeholder="Email"
                onChange={(e) => {
                  setForm((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full p-2 rounded outline-none bg-gray-600 text-white"
                placeholder="Password"
                onChange={(e) => {
                  setForm((prev) => {
                    return { ...prev, password: e.target.value };
                  });
                }}
              />
            </div>
            {/* @ts-ignore */}
            <Button
              type="submit"
              className="w-full p-3 rounded bg-[#F97E1A] text-black font-bold">
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signin;
