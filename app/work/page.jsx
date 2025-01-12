"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "LLM Optimization Using QLoRA and AWQ",
    title: "Project 1",
    description:
      "Performed QLoRA and AWQ quantization on the Flan-T5 (Base, Large, XL) LLMs and evaluated their practicality for real world scenarios.",
    stack: [
      { name: "Python" },
      { name: "HuggingFace" },
      { name: "Google Colab" },
      { name: "Kaggle" },
    ],
    image: "/assets/Raj.png", // Ideally it should be /assets/projects
    live: "",
    github: "https://github.com/RajVenkat20/LLM-Optimizations-QLoRA-AWQ",
  },
  {
    num: "02",
    category: "Stock Price Prediction",
    title: "Project 2",
    description:
      "Performed sentiment analysis on Twitter data to predict the prices of stocks over a span of 8 months.",
    stack: [
      { name: "Python" },
      { name: "Jupyter Notebook" },
      { name: "Numpy" },
      { name: "Kaggle" },
    ],
    image: "/assets/Raj.png", // Ideally it should be
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Portfolio",
    title: "Project 3",
    description:
      "Designed, built, and deployed a portfolio website using Next.js, Tailwind CSS and Framer Motion.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Framer Motion" },
    ],
    image: "/assets/Raj.png", // Ideally it should be
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum salt khao re baigan!",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/Raj.png", // Ideally it should be
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum salt khao re baigan!",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/Raj.png", // Ideally it should be
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum salt khao re baigan!",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/Raj.png", // Ideally it should be
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum salt khao re baigan!",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/Raj.png", // Ideally it should be
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;

    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col; xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/*  Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Removing the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider buttons */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
