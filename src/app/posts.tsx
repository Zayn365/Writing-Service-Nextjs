"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography, Tabs } from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";
import ServicesSection from "@/components/services";
import useData from "@/utils/useData";

export function Posts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleData = (result: any) => {
    if (typeof result === "string") {
      setError(result);
    } else {
      setData(result);
    }
  };

  const fetchTestimonials = useData("/api/testimonials", handleData);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
        <div className="w-full flex mb-8 flex-col items-center">
          <ServicesSection />
          {/* <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
            <Tab value="trends">Trends</Tab>
            <Tab value="frontend">Frontend</Tab>
            <Tab value="backend">Backend</Tab>
            <Tab value="cloud">Cloud</Tab>
            <Tab value="ai">AI</Tab>
            <Tab value="tools">Tools</Tab>
          </TabsHeader> */}
        </div>
      </Tabs>
      {/* @ts-ignore */}
      <Typography variant="h6" className="mb-2">
        Latest Blog Posts
      </Typography>
      {/* @ts-ignore */}
      <Typography variant="h1" className="mb-2">
        Trends News
      </Typography>
      <div className="container mb-8">
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className=" mb-5 text-center text-2xl my-8 italic"
        >
          Do you have ideas that you wish to turn into a book or a series of
          books but don’t have time, commitment , discipline , or the skill to
          write the book(s) as fast as you want to?
        </Typography>
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className=" mb-5 text-center text-2xl my-8 italic"
        >
          Or are you simply looking to make money through self-publishing and
          are looking for a reliable service provider that will help you meet
          your self-publishing goals without fail so you can build a stream of
          passive income you can count on?
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          If you’ve answered YES, keep reading...
        </Typography>
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className=" mb-5 text-center text-2xl my-8 underline"
        >
          You’ve Just Discovered The Best Ghostwriting Service Provider To Meet
          Your Goals, Without Spending A Fortune While At It!
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          It takes anywhere between 2 months and a full year for most people to
          write a book!
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          While this depends on the word count, we can get your book ready,
          fully edited, and formatted for Kindle or Paperback in as little as
          <span className="font-bold"> 14 days or less</span> (for up to 10,000
          words) and <span className="font-bold"> one month </span>(for up to
          30,000 words)!
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          And we do that at a{" "}
          <span className="font-bold underline">
            {" "}
            flat rate of $2.5/100 words only.
          </span>{" "}
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          Because that’s what we do, 24/7!
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          If you are looking for a book you will be proud to put your name on
          it, don’t hesitate to reach out and place an order!
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          You will be glad you did!
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className=" mb-5 text-center text-2xl my-8">
          <span className="font-bold underline">YUP:</span>We write, you take
          all the credit (we’ll just request a testimonial)!
        </Typography>
      </div>
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {/* {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
            date={date}
            author={{
              img: author.img,
              name: author.name,
            }}
          />
        ))} */}
        {data.slice(4,7).map((item: any) => (
          <BlogPostCard
            key={item?.title}
            img="https://i.pcmag.com/imagery/articles/05LXP8WPMNAES8LK4rf9IZQ-13.fit_lim.v1633113383.jpg"
            // tag={"Enterprise"}
            title={item?.title.slice(0,20)}
            desc={item?.text}
            // date={"10 September 2022"}
            // author={{
            //   name: "unknown",
            // }}
          />
        ))}
      </div>
      {/* @ts-ignore */}
      {/* <Button
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        VIEW MORE
      </Button> */}
    </section>
  );
}

export default Posts;
