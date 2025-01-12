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
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum salt khao re baigan!",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/Raj.png", // Ideally it should be /assets/projects
    live: "",
    github: "",
  },
  {
    num: "02",
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
    num: "03",
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
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col; xl:justify-between order-2 xl:order-none">
            <div>
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
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
            </div>
          </div>
          <div className="w-full xl:w-[50%]">Slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
