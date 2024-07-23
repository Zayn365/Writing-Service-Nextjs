"use client";
import ServiceCard from "@/components/service-card";
import { Typography } from "@material-tailwind/react";
import React from "react";

const services: any[] = [
  { title: "Ebook Writing Service", icon: "/icons/ebook-writing.png", description: "Professionally written ebooks tailored to your needs." },
  { title: "Book Description Writing", icon: "/icons/book-description.png", description: "Compelling descriptions that hook readers." },
  { title: "Full Package Publishing", icon: "/icons/full-package.png", description: "Comprehensive publishing services from start to finish." },
  { title: "Article/Blog post Writing", icon: "/icons/article-blog.png", description: "Engaging articles and blog posts on any topic." },
  { title: "Ebook Editing", icon: "/icons/ebook-editing.png", description: "Thorough editing to polish your ebook." },
  { title: "Book Formatting", icon: "/icons/book-formatting.png", description: "Professional formatting for print and digital books." },
  { title: "Cover Creation", icon: "/icons/cover-creation.png", description: "Eye-catching cover designs that attract readers." },
  { title: "Keyword Research", icon: "/icons/keyword-research.png", description: "In-depth keyword analysis for SEO optimization." },
  { title: "Children's Books Illustration", icon: "/icons/children-illustration.png", description: "Vibrant illustrations to bring children’s stories to life." },
  { title: "Prewritten Books", icon: "/icons/prewritten-books.png", description: "Ready-made books for quick publishing." },
  { title: "Any Other Service", icon: "/icons/any-other-service.png", description: "Customized services to meet unique publishing needs." }
];

const Service = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Typography className="text-center text-3xl font-bold my-8 ">
        Our Services
      </Typography>
      <div className=" container  mx-auto p-4 bg-[#F97E1A] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((val:any) => (
          <>
          <ServiceCard
          icon=""
          title={val.title}
          description={val.description}
        /> 
        </>  
          ))}

          
          {/* <ServiceCard
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
          /> */}
        </div>
      </div>
    </>
  );
};

export default Service;
