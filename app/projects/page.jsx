"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "LLM Optimization Techniques",
    description: "https://github.com/RajVenkat20/LLM-Optimizations-QLoRA-AWQ",
    href: "This project takes the Flan-T5 LLM and applies QLoRA and AWQ quantization techniques.",
  },
  {
    num: "02",
    title: "Stock Price Prediction",
    description: "Performed sentiment analysis on Twitter data to predict the prices of stocks over a span of 8 months.",
    href: "",
  },
  {
    num: "03",
    title: "Portfolio",
    description: "Designed, built, and deployed a portfolio website using Next.js, Tailwind CSS and Framer Motion.",
    href: "https://github.com/RajVenkat20/Portfolio",
  },
  {
    num: "04",
    title: "Voice ChatGPT",
    description: "Designed, built, and deployed a portfolio website using Next.js, Tailwind CSS and Framer Motion.",
    href: "https://github.com/Ashwanth369/Voice-ChatGPT",
  },
  {
    num: "05",
    title: "Personal Blog",
    description: "Built a React-based full-stack application with Firebase for secure authentication, MongoDB for articles and comments management and Axios for API integration.",
    href: "https://github.com/RajVenkat20/blog-app",
  },
  {
    num: "06",
    title: "Fitness Dashboard",
    description: "Created a UI dashboard using React to display real-time fitness data from Samsung Health.",
    href: "https://github.com/RajVenkat20",
  },
  {
    num: "07",
    title: "LeetCode Solved",
    description: "An archive of the LeetCode Problems that I solved over time.",
    href: "https://github.com/RajVenkat20/LeetCode-Solved",
  },
];

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
