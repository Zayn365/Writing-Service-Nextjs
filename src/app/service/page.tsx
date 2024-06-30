"use client";
import ServiceCard from "@/components/service-card";
import { Typography } from "@material-tailwind/react";
import React from "react";

const Service = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Typography className="text-center text-3xl font-bold my-8 ">
        Our Services
      </Typography>
      <div className=" container  mx-auto p-4 bg-[#F97E1A] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon="PaperClipIcon"
            title="Net Connect Plus"
            description="It is a long established fact that a reader will be distracted by the readable content of a page layout long established."
          />
          <ServiceCard
            icon="ChartPieIcon"
            title="Data Guard Sentinel"
            description="It is a long established fact that a reader will be distracted by the readable content of a page layout long established."
          />
          <ServiceCard
            icon="ShieldCheckIcon"
            title="App Swift DevOps"
            description="It is a long established fact that a reader will be distracted by the readable content of a page layout long established."
          />
          <ServiceCard
            icon="LightningBoltIcon"
            title="Data Guard Sentinels"
            description="It is a long established fact that a reader will be distracted by the readable content of a page layout long established."
          />
          <ServiceCard
            icon="PhotographIcon"
            title="App Swift DevOps"
            description="It is a long established fact that a reader will be distracted by the readable content of a page layout long established."
          />
          <ServiceCard
            icon="CheckCircleIcon"
            title="Net Connect Plus"
            description="It is a long established fact that a reader will be distracted by the readable content of a page layout long established."
          />
        </div>
      </div>
    </>
  );
};

export default Service;
