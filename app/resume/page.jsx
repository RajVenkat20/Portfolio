"use client";

import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaJira,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About data
const about = {
  title: "About me",
  description: "Lorem ipsum salt kha re baigan",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Raj Venkat Reddy Mavuram",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 765 426 9059",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "mrajvenkatreddy@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Telugu, Hindi, Kannada",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum salt khao re baigan",
  items: [
    {
      company: "Purdue University - West Lafayette",
      position: "Web Developer",
      duration: "May 2023 - Dec 2024",
    },
    {
      company: "Oracle India Pvt. Ltd.",
      position: "Software Engineer II",
      duration: "Sep 2022 - Dec 2022",
    },
    {
      company: "Oracle India Pvt. Ltd.",
      position: "Software Engineer I",
      duration: "Jul 2021 - Aug 2022",
    },
    {
      company: "Oracle India Pvt. Ltd.",
      position: "Software Engineer Intern",
      duration: "Jan 2021 - Jun 2021",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Lorem ipsum salt khao re baigan",
  items: [
    {
      institution: "Purdue University - West Lafayette",
      degree: "Master of Science",
      duration: "Jan 2023 - Dec 2024",
    },
    {
      institution: "Vasavi College of Engineering",
      degree: "Bachelor of Engineering",
      duration: "Jul 2017 - Aug 2021",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum salt khao re baigan",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "HTML5",
    },
    {
      icon: <FaReact />,
      name: "HTML5",
    },
    {
      icon: <FaAngular />,
      name: "HTML5",
    },
    {
      icon: <FaJira />,
      name: "HTML5",
    },
    {
      icon: <FaJs />,
      name: "HTML5",
    },
    {
      icon: <FaJava />,
      name: "HTML5",
    },
    {
      icon: <FaNodeJs />,
      name: "HTML5",
    },
    {
      icon: <SiNextdotjs />,
      name: "HTML5",
    },
    {
      icon: <SiTailwindcss />,
      name: "HTML5",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">Experience</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
