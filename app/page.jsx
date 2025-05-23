"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

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
              Hello, I'm <br />{" "}
              <span className="text-accent">Raj Venkat Reddy Mavuram</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
            Software Engineer with a strong foundation in Computer Science and nearly three years of hands-on experience in building scalable, high-performance full-stack applications. Proficient in designing RESTful APIs, implementing microservices architectures, and developing intuitive frontend interfaces using modern frameworks like React, Next.js, and Spring Boot. Adept in programming languages including Python, Java, JavaScript, TypeScript and SQL, with practical experience across cloud platforms such as AWS and GCP. Proven ability to deliver robust solutions in enterprise environments, with a focus on performance optimization, clean architecture, and cross-functional collaboration.
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
