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

// Education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "Hold a Master of Science in Computer Science from Purdue University and a Bachelor’s degree in the same field. Academic background includes coursework in algorithm design and analysis, operating systems, distributed systems, computer networks, database systems, data mining, information security, cryptography, artificial intelligence, machine learning, and reasoning with large language models (LLMs).",
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

const Education = () => {
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
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-center">{education.title}</h3>
                <p className="text-justify text-white/60 mx-auto xl:mx-0">
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
                          <span className="text-accent min-h-[40px]">{item.duration}</span>
                          <h3 className="text-xl min-h-[40px] text-center lg:text-left">
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

export default Education;
