"use client";

import Image from "next/image";
import { Button, Typography, Input } from "@material-tailwind/react";
import Typewriter from 'typewriter-effect';

const services = [
  "Ebook Writing Service",
  "Book Description Writing Service",
  "Full Package Publishing Service",
  "Article/Blog post Writing Service",
  "Ebook Editing Service",
  "Book Formatting Service",
  "Cover Creation Service",
  "Keyword Research Service",
  "Children's Books Illustration",
  "Prewritten Books"
];
import axios from "axios";

function Hero() {
  return (
    <header className="mt-5 bg-white p-8">
    <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
      {/* @ts-ignore */} 
      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
      >
        Let us craft your content
        if you are looking for professional:
      </Typography>
      {/* @ts-ignore */} 
      <Typography
        variant="lead"
        className="mx-auto mt-8 mb-4 w-full text-[20px] lg:text-[30px] px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
      >
<Typewriter
  options={{
    strings: services,
    autoStart: true,
    loop: true,
  }}
/>
      </Typography>
      <div className="grid place-items-start justify-center gap-2">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="w-80">
            {/* @ts-ignore */}
            <Input label="name@creative-tim.com" />
          </div>
          {/* @ts-ignore */} 
          <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
            get started
          </Button>
        </div>
        <div className="flex items-center gap-1">
          {/* @ts-ignore */} 
          <Typography variant="small" className="font-normal text-gray-700">
            See our{" "}
            <a
              href="#"
              className="hover:text-gray-900 transition-colors underline"
            >
              Terms and Conditions
            </a>
          </Typography>
        </div>
      </div>
    </div>
    <div className="w-full lg:container lg:mx-auto">
      <Image
        width={1024}
        height={400}
        src="/image/blog-background.png"
        alt="credit cards"
        className="h-96 w-full rounded-lg object-cover lg:h-[21rem]"
      />
    </div>
  </header>
  );
}
export default Hero;
