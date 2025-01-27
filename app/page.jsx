"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Resume from "@/app/experience/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page";

const Home = () => {
  const resumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6 ">
              Hello I'm <br />{" "}
              <span className="text-accent">Raj Venkat Reddy Mavuram</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              Software engineer with a strong academic foundation and around 4
              years of professional experience in full-stack development, API
              design and implementation, and scalable microservices
              architecture. Proficiency in programming languages like Python,
              Java, JavaScript, Typescript, and SQL, and modern frameworks like
              React, Angular, VueJS, and NextJS, complemented by expertise in cloud platforms
              such as AWS, and GCP.
              <br />
              <br />
              My professional experience includes working as a Software Engineer
              II at Oracle, where I optimized REST APIs, designed back-end
              services, and enhanced UI workflows for Oracle's leading
              hospitality product, OPERA Cloud.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={resumeDownload}
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl-mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
