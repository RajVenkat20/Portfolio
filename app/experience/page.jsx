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
    "Software Engineer with ~3 years of experience delivering full-stack solutions and architecting scalable microservices for enterprise applications. Proven track record in developing high-performance web applications using React, Next.js, and Spring Boot, and designing robust APIs with FastAPI and Java EE. Skilled in optimizing database performance with PostgreSQL, MySQL, and Oracle, and leveraging cloud platforms like AWS and GCP to ensure system reliability, scalability, and availability. Adept at cross-functional collaboration, performance tuning, CI/CD automation, and delivering user-centric solutions that drive efficiency and elevate user experience.",
  items: [
    {
      company: "Oracle",
      position: "Software Engineer II",
      duration: "Jan 2022 - Dec 2022",
      summary: "Led development of client-facing features for OPERA Cloud using Oracle ADF, Java EE, and OJET, improving system performance and UI responsiveness. Designed RESTful APIs and optimized SQL queries for OHIP, achieving significant gains in response time and scalability. Spearheaded CI/CD automation using Docker and Kubernetes, mentored junior engineers, and maintained high test coverage with TestNG.",
    },
    {
      company: "Oracle",
      position: "Software Engineer I",
      duration: "Jan 2021 - Dec 2021",
      summary: "Enhanced guest profile and loyalty workflows within OPERA Cloud using Oracle ADF’s MVC architecture and optimized backend logic through SQL and PL/SQL improvements. Operated in a CI/CD Agile environment to deliver new features and resolve bugs efficiently. Contributed to automation testing using Selenium and strengthened code quality with tools like Maven, Git, and Chrome DevTools.",
    },
    {
      company: "Purdue University",
      position: "Software Developer",
      duration: "May 2023 - Dec 2024",
      summary: "Contributed to the development of a research-focused web application using React, FastAPI, and PostgreSQL, improving system performance through lazy loading and indexed queries. Designed scalable API endpoints, implemented efficient data retrieval strategies, and deployed workflow tools on AWS using EC2, RDS, and CloudWatch to enhance developer collaboration and operational reliability.",
    },
  ],
};

const Experience = () => {
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

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-center">{experience.title}</h3>
                <p className="text-justify text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex items-center gap-3 min-h-[45px]">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-accent">{item.company}</p>
                          </div>
                      
                          <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <span className="min-h-[40px]">{item.duration}</span>
                          <div>
                          <p className="text-justify text-white/60">{item.summary}</p>
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

export default Experience;
