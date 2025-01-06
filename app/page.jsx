import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Raj Venkat Reddy Mavuram</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              As a passionate software engineer with a strong foundation in
              computer science and a commitment to innovation, I thrive on
              building efficient and scalable solutions. With a Master's in
              Computer Science from Purdue University, I bring expertise in
              various technologies including Java, Python, React, AWS, and
              microservices architecture.
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
