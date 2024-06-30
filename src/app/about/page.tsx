"use client";
import Image from "next/image";
import React from "react";
import bg from "../../../public/image/about/image.png";
import whatWedo from "../../../public/image/about/what-we-do.png";
import joinUs from "../../../public/image/about/join-us.png";
import ourValue from "../../../public/image/about/value.png";
const About = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="lg:w-1/2 w-full mx-auto flex flex-col justify-center items-center">
        <p className="text-4xl font-bold ">About us</p>
        <p className="w-[70%] text-center text-lg text-gray-400">
          Read more about us our vision mission, success, and many other things
          you might love.
        </p>
      </div>
      <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-4 mx-auto my-14">
        <div className="w-full md:w-1/2">
          <h3 className="text-[#F97E1A] text-2xl font-bold capitalize ">
            Who We Are
          </h3>
          <hr className="w-10/12 mb-2" />
          <p className="text-lg text-gray-400">
            We are a diverse team of writers, editors, and content enthusiasts
            dedicated to curating and delivering high-quality articles on a wide
            range of topics. From insightful blogs and in-depth analyses to
            engaging stories and practical guides, our content is designed to
            inform, entertain, and inspire our readers.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={bg} alt="about" className="rounded-lg" />
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center gap-y-3 mx-auto my-14">
        <div className="w-full lg:w-1/3 mx-auto flex flex-col justify-center items-center">
          <h2 className="font-bold text-3xl text-center w-10/12 ">
            Take a vital look at our application working
          </h2>
          <p className="text-lg text-gray-400 text-center my-2">
            By accessing and using the legal wizard platform you agree to be
            bound by these Terms of service.
          </p>
        </div>
        <Image src={bg} alt="about" className="rounded-lg" />
      </div>
      <div className="lg:w-[70%] container flex flex-col justify-center items-center gap-y-8 py-8 mx-auto my-14 bg-black/10 rounded-lg">
        <div className="flex justify-center items-center gap-x-14 w-10/12">
          <Image src={whatWedo} alt="about" width={100} height={100} />
          <div className="flex flex-col justify-center item-start w-10/12">
            <h4 className="font-bold text-2xl ">What We Do</h4>
            <p className="text-sm text-gray-800">
              Content Creation: Our team of skilled writers crafts original and
              compelling articles on various subjects, ensuring that our readers
              have access to fresh and valuable content. Curated Collections: We
              curate articles from a wide array of sources, providing our
              audience with a rich and diverse reading experience. Community
              Engagement: We foster a vibrant community of writers and readers
              who can connect, share ideas, and collaborate on projects.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-14 w-10/12">
          <Image src={ourValue} alt="about" width={100} height={100} />
          <div className="flex flex-col justify-center item-start w-10/12">
            <h4 className="font-bold text-2xl">Our Values</h4>
            <p className="text-sm text-gray-800">
              Quality: We are committed to maintaining high standards of writing
              and editorial excellence. Diversity: We celebrate diverse
              perspectives and voices, offering content that reflects a wide
              range of experiences and viewpoints. Innovation: We continually
              explore new ideas and approaches to keep our content engaging and
              relevant.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-14 w-10/12">
          <Image src={joinUs} alt="about" width={100} height={100} />
          <div className="flex flex-col justify-center item-start w-10/12">
            <h4 className="font-bold text-2xl">Join Us</h4>
            <p className="text-sm text-gray-800">
              Whether you{" ' "}re an avid reader seeking insightful content, a
              writer looking to share your work, or someone passionate about the
              power of words, Write Articles is the place for you. Join our
              community, explore our articles, and be part of a platform that
              values the art of writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
