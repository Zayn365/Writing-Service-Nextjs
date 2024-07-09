"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import signUP from "../../../public/image/signup.jpg";
import { Button, Typography } from "@material-tailwind/react";
import { UserHooks } from "../../hooks/UserHooks";
import { ToastContainer } from "react-toastify";
import { useAppContext } from "@/context/AppContext";
const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { user } = useAppContext();
  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, []);
  const { handleSignup } = UserHooks();

  return (
    <div className="py-16 md:py-22   flex items-center justify-center bg-white">
      <div className="flex flex-col lg:flex-row w-11/12 lg:w-3/4 bg-[#F97E1A] rounded-lg overflow-hidden shadow-lg">
        <div className="w-full lg:w-1/2 p-6 flex items-center  justify-center relative">
          <Image
            src={signUP}
            alt="Golden human statue"
            className="rounded-lg w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 p-10 bg-gray-700 text-white">
          <div className=" flex items-center justify-between">
            {/* @ts-ignore */}
            <Typography className="text-2xl lg:text-3xl font-bold">
              Create your account
            </Typography>
            {/* @ts-ignore */}
            <Button className="text-[#F97E1A]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 108 8 8 8 0 00-8-8zM9 4h2v5H9zm1 10a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0110 14z"></path>
              </svg>
            </Button>
          </div>

          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              handleSignup(form);
            }}
            className="mt-8">
            <div className="mb-4">
              <label className="block mb-1">Fullname</label>
              <input
                type="text"
                onChange={(e) => {
                  setForm((prev) => {
                    return { ...prev, name: e.target.value };
                  });
                }}
                className="w-full p-2 rounded outline-none bg-gray-600 text-white"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                onChange={(e) => {
                  setForm((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                }}
                type="email"
                className="w-full p-2 outline-none rounded bg-gray-600 text-white"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                onChange={(e) => {
                  setForm((prev) => {
                    return { ...prev, password: e.target.value };
                  });
                }}
                type="password"
                className="w-full p-2 rounded outline-none bg-gray-600 text-white"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Repeat password</label>
              <input
                type="password"
                className="w-full p-2 rounded outline-none bg-gray-600 text-white"
                placeholder="Repeat password"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox outline-none h-5 w-5 text-[#F97E1A]"
                />
                {/* @ts-ignore */}
                <Typography className="ml-2">
                  I Agree Terms & Conditions
                </Typography>
              </label>
            </div>
            {/* @ts-ignore */}
            <Button
              type="submit"
              className="w-full p-3 rounded bg-[#F97E1A] text-black font-bold">
              Create an account
            </Button>
          </form>
          {/* @ts-ignore */}
          <Typography className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/signin" className="text-[#F97E1A]">
              Sign in
            </a>
          </Typography>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
