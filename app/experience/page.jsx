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
  FaPython,
  FaVuejs,
  FaJenkins,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { DiNpm, DiPostgresql } from "react-icons/di";
import { VscGithubInverted, VscVscode } from "react-icons/vsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


// Experience data
const experience = {
  icon: "/assets/resume/cap.svg",
  title: "My Experience",
  description:
    "Software engineer with ~4 years of professional experience in full-stack development, scalable microservices architecture, and API design. My expertise spans modern frameworks like React and Next.js, cloud platforms like AWS and GCP, and languages including Python, Java, JavaScript, and SQL. I have developed and optimized high-performing web applications, streamlined complex database operations, and designed reliable, scalable solutions for enterprise systems, consistently improving efficiency and user experience.",
  items: [
    {
      company: "Purdue University",
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
  title: "My Education",
  description:
    "I hold a Bachelor's and Master's degree in Computer Science, with coursework in algorithm design and analysis, operating systems, computer networks, data mining, distributed systems, database systems, information security, cryptography, machine learning, artificial intelligence, and reasoning with large language models (LLMs).",
  items: [
    {
      institution: "Purdue University - West Lafayette",
      degree: "Master of Science in CS",
      duration: "Jan 2023 - Dec 2024",
    },
    {
      institution: "Vasavi College of Engineering",
      degree: "Bachelor of Engineering in CS",
      duration: "Jul 2017 - Aug 2021",
    },
  ],
};

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
            <TabsTrigger value="experience" className="rounded-xl">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded-xl">
              Education
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-justify max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-justify max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>            
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
