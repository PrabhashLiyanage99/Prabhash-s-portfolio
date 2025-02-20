import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motions";
import { Html } from "@react-three/drei";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="hidden sm:block w-[200px] md:w-[145px] lg:w-[200px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 md:px-10 lg:px-12 min-h-[250px] md:min-h-[260px] lg:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-14 md:w-16 lg:w-20 object-contain" />
        <h3 className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const MobileServiceCard = ({ title, icon }) => (
  <motion.div
    variants={fadeIn("left", "spring", 0.2, 0.75)}
    className="sm:hidden w-full p-4 bg-gray-800 rounded-lg shadow-lg flex items-center gap-4"
  >
    <img src={icon} alt="web-development" className="w-12 h-12 object-contain" />
    <h3 className="text-white text-lg font-bold">{title}</h3>
  </motion.div>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
>
  <span className="sm:hidden">
    I am a software engineer skilled in React, Next.js, Three.js, Node.js, Express, Spring Boot, and ASP.NET.
  </span>

  <span className="hidden sm:block">
    I am a software engineer skilled in React, Next.js, Three.js, Node.js, Express, Spring Boot, and ASP.NET. 
    I specialize in building responsive UIs and scalable backends, ensuring high performance and clean, maintainable 
    code. Passionate about problem-solving and innovation, I thrive on creating impactful solutions.
  </span>
</motion.p>

<div className="lg:mt-10 sm:mt-3 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <>
          <ServiceCard key={`desktop-${service.title}`} index={index} {...service} />

          <MobileServiceCard key={`mobile-${service.title}`} {...service} />
        </>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");