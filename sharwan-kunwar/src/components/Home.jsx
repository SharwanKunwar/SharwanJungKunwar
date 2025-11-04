import React from "react";
import { Container } from "./Container";
import { motion } from "motion/react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useContext } from "react";
import ProjectCard from "./ProjectCard";
import { Button, Descriptions } from "antd";
import {SiNextdotjs, SiC, SiReact, SiSpringboot, SiOpenjdk, SiPostgresql, SiDocker, SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiFirebase, SiHtml5, SiCss3, SiNodedotjs, SiFramer, SiGithub, SiAntdesign } from "react-icons/si";

import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import { DarkModeContext } from '../context/DarkModeContext';
import { Link } from "react-router-dom";

  const ProjectDetails = [
  {
    id: 1,
    title: "LeadCoder",
    imgUrl: "/Project-IMG/LeadCoder.png",
    URL: "https://lead-coder.vercel.app/",
    source: "https://github.com/SharwanKunwar/LeadCoder",
    description: "A concept-driven coding platform where users learn programming basics through interactive examples and solve challenges to strengthen their skills.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 20, 2025, 10:12 AM"
  },
  {
    id: 2,
    title: "Focus Planner",
    imgUrl: "/Project-IMG/Focus.png",
    URL: "https://focus-ten-omega.vercel.app/",
    source: "https://github.com/SharwanKunwar/Focus",
    description: "Focus Planner is a productivity web app to organize tasks, track progress, take notes, play study music, and get smart reminders for focused work.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 13, 2025, 9:23 AM"

  },
  {
    id: 3,
    title: "Find Images",
    imgUrl: "/Project-IMG/SearchImg.png",
    URL: "https://find-images-three.vercel.app/",
    source: "https://github.com/SharwanKunwar/Find-Images",
    description: "A React image gallery using Pexels API to search, view, and download images. Features responsive grid, pagination, loading state, and error toasts.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 8, 2025, 3:20 PM"
  },
  {
    id: 4,
    title: "Gradient Generator",
    imgUrl: "/Project-IMG/GG.png",
    URL: "https://gradient-generator-six-pied.vercel.app/",
    source: "https://github.com/SharwanKunwar/gradient-generator",
    description: "A React + Tailwind app to generate beautiful linear & radial gradients. Preview, copy CSS, and explore random color combos. Fun & responsive! 🎨⚛️",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 7, 2025, 2:20 PM"
  }
];


function Home() {
  const [more, setMore] = useState(false);
  const [more02, setMore02] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
    
        <div id="home" className="min-h-screen flex items-start justify-start">
            <Container className={`min-h-[200vh] p-4 md:p-10 md:pt-0 `}>
            <div className="md:h-[50px] h-[25px]"></div>
            <motion.section
            initial={{ opacity: 0, y: 15, filter: "blur(7px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "none" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            <h1 className={`text-3xl md:text-4xl font-bold tracking-tight text-neutral-800  pt-20 ${isDarkMode && "text-white" }`}>
                Sharwan Jung Kunwar
            </h1>
            <p className="text-neutral-400 pt-3 mb-4 md:text-sm text-sm max-w-2xl">
                A software developer who writes code like a chef cooks gourmet
                meals: with precision, creativity, and a few spices of sarcasm.
            </p>
        </motion.section>

        <section className=" w-full flex justify-start items-center flex-wrap gap-5">
            <motion.button
                initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "none" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                onClick={() => setMore(!more)}
                className="border border-black/30 rounded px-8 bg-indigo-400 text-white py-1 text-[13px] mastShadow hover:bg-indigo-500   hover:border-indigo-500"
            >
                More
            </motion.button>

            <a target="_blank" href="https://github.com/SharwanKunwar/Dev">
            <motion.button
                initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "none" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`border border-black/30 px-2 py-1  text-[13px] hover:bg-indigo-500  rounded mastShadow hover:border-indigo-500 ${isDarkMode? "mastWhiteShadow":""}`}
            >
                🌟 Give Star
            </motion.button>
            </a>

            <a target="_blank" href="https://github.com/SharwanKunwar">
              <motion.button
                id="projects"
                initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "none" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`border border-black/30 px-2 py-1  text-[13px] hover:bg-indigo-500  rounded mastShadow hover:border-indigo-500 ${isDarkMode? "mastWhiteShadow":""}`}
            >
                {" "}
                🐱 Follow Me
            </motion.button>
            </a>
        </section>

        {more && (
            <motion.section
              initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "none" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="mt-3"
            >
              <p className="text-neutral-400  pt-3 md:text-sm text-sm max-w-2xl">
                I specialize in building scalable, efficient systems and
                crafting digital experiences that don’t just work they wow. I’m
                currently building my own path (yes, solo dev life ✌️), working
                on projects that combine logic, aesthetics, and a whole lot of
                coffee.
              </p>
              <p className="text-neutral-400  pt-3 md:text-sm text-sm max-w-2xl">
                I speak fluent <strong>Java</strong>, <strong>C</strong>,{" "}
                <strong>JavaScript</strong>, and sarcasm, and I have a
                not-so-secret obsession with optimizing everything — from
                backend performance to how my terminal looks.
              </p>
              <p
                id="projects"
                className="text-neutral-400  pt-3 md:text-sm text-sm max-w-2xl"
              >
                Whether it's building a full-stack app, architecting clean APIs,
                or animating a <strong>“404 page not found”</strong> to dance —
                I’m here for it.
              </p>
              <section className="mt-10 w-full text-neutral-400  md:text-sm text-sm max-w-2xl">
                <p>
                  If Googling me is your thing—I'm flattered. You can find me
                  across the web here:
                </p>
                <div className="grid md:grid-cols-10 grid-cols-7 gap-2 md:mt-3 mt-5  w-[400px]">
                  <section className=" flex justify-start items-center ">
                    <a
                      href="https://www.facebook.com/sravana.kumvara/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-blue-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                    </a>
                  </section>
                  <section className=" flex justify-start items-center ">
                    <a
                      href="https://www.linkedin.com/in/sharwan-kunwar-95a919317/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-blue-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                    </a>
                  </section>
                  <section className="flex justify-start items-center ">
                    <a
                      href="https://github.com/SharwanKunwar"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub className={`text-black w-6 h-6 hover:text-gray-300 transition-colors duration-200 ${isDarkMode && "text-white"}`} />
                    </a>
                  </section>
                </div>
              </section>
            </motion.section>
        )}

        {/* fev projects  ---------------------------------*/}
        <div className=" mt-10">
            <h1 className={`text-2xl font-medium lg:hidden ${isDarkMode && "text-white"}`}>Recent Projects</h1>
            <h1 className="text-2xl font-medium mb-2 lg:block hidden">Proof That I’m Slightly Less Clueless Than Yesterday</h1>
            <p className="text-neutral-400 mb-2 lg:block hidden">
              A carefully curated collection of my finest attempts at coding, where some experiments succeeded, 
              some failed spectacularly, and a few might just be considered accidental genius. 
              Enter at your own risk.
            </p>
            <div className="grid lg:grid-cols-2  lg:grid-rows-2 gap-5 py-5">
              {ProjectDetails.map((item, index) => (
                <ProjectCard key={index} title={item.title} img = {item.imgUrl} des = {item.description} SUrl = {item.source} PUrl = {item.URL} Stack={item.teck} dt ={item.date}/>
              ))}
            </div>
        </div>
        <div className="text-center mt-5">
          <Link to="/projects">
            <Button>More Projects</Button>
          </Link>
        </div>




      <div className=" w-full h-[120px] md:mt-20 mt-10 flex flex-col justify-center items-center overflow-hidden">
      {/* Top Row – Left to Right */}
        <div className="w-full h-[60px] flex lg:items-center items-end justify-between text-5xl animate-marquee-left text-black/80  md:gap-0 gap-6">
          <SiReact className="text-blue-400" />
          <SiSpringboot className="text-green-600" />
          <SiOpenjdk className="text-red-600" />
          <SiPostgresql className="text-blue-700" />
          <SiDocker className="text-blue-500" />
          <SiTailwindcss className="text-teal-400" />
          <SiGithub className={`text-black  ${isDarkMode?"text-white":""}`} />
        </div>

      {/* Bottom Row – Right to Left */}
      <div className="w-full h-[60px] flex lg:items-center items-start lg:justify-between  text-5xl animate-marquee-right text-black/80  md:gap-0 gap-4 ">
        <SiJavascript className="text-yellow-400" />
        <SiC className="text-blue-400" />
        <SiNextdotjs title="Next.js" className={`text-black  ${isDarkMode && "text-white"}`} />
        <SiMongodb className="text-green-600" />
        <SiFirebase className="text-yellow-500" />
        <SiHtml5 className="text-orange-600" />
        <SiCss3 className="text-blue-500" />
        <SiFramer className="text-purple-500" title="Framer Motion" />
        <SiAntdesign className="text-blue-600" title="Ant Design" />
      </div>
    </div>

        {/* //Education page start from here  */}
        <Resume/>

        </Container>
        </div>
        
    </>
  );
}

export default Home;
