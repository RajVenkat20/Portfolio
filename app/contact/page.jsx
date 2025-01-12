"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (765)-426-9059",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mrajvenkatreddy@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "13600 Long Island Dr, Pflugerville, TX, 78660",
  },
];

const Contact = () => {
  return (
    <motion.section
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent ">Let's work together!</h3>
              <p className="text-white/60">Lorem ipsum salt kaho re baigan!</p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" className="rounded-xl"/>
                <Input type="lastname" placeholder="Last Name" className="rounded-xl"/>
                <Input type="email" placeholder="Email Address" className="rounded-xl"/>
                <Input type="phone" placeholder="Phone Number" className="rounded-xl"/>
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full rounded-xl">
                  <SelectValue placeholder="Select a service"/> 
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Full-Stack Developer</SelectItem>
                    <SelectItem value="cst">Software Engineer</SelectItem>
                    <SelectItem value="mst">Web Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            Info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
