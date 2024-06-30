"use client";
import Image from "next/image";
import React from "react";
import contact from "../../../public/image/contact/contact.jpg";
import { Typography } from "@material-tailwind/react";

const Contact = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Typography className="text-center text-3xl font-bold my-8 md:my-12 ">
        Contact us
      </Typography>
      <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen  p-6">
        <div className="lg:w-1/2 px-6">
          <Image
            className="rounded-lg shadow-lg h-auto md:h-[600px]"
            src={contact}
            alt="Testimonial"
          />
          <div className="mt-4">
            {/* @ts-ignore */}
            <Typography className="text-gray-700 text-lg">
              We{"'"}d love to hear from you! Whether you have a question about
              our services, pricing, need a demo, or anything else, our team is
              ready to answer all your questions.
            </Typography>
            {/* @ts-ignore */}
            <Typography className="mt-2 text-gray-500">
              — Write article for me
            </Typography>
          </div>
        </div>
        <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-lg md:h-[600px]">
          {/* @ts-ignore */}
          <Typography className="text-2xl font-bold text-gray-800">
            Talk to our experts
          </Typography>
          {/* @ts-ignore */}
          <Typography className="mt-4 text-gray-600">
            Your feedback is valuable to us. Please fill out the form below to
            send us your comments or questions, and we{"'"}ll get back to you as
            soon as possible.
          </Typography>
          <form className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 p-3 rounded-lg w-full focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 p-3 rounded-lg w-full focus:border-blue-500"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-lg w-full focus:border-blue-500"
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Leave us a message..."
                className="border border-gray-300 p-3 rounded-lg w-full focus:border-blue-500 h-32"></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-[#F97E1A] text-white py-3 px-6 rounded-lg hover:bg-opacity-75 focus:outline-none focus:bg-blue-700">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
