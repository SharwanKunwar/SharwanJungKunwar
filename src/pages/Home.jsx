import React, { useState,useEffect, useContext } from "react";
import { Container } from "../components/Container";
import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiC,
  SiReact,
  SiSpringboot,
  SiOpenjdk,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiFramer,
  SiGithub,
  SiAntdesign,
} from "react-icons/si";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { Button } from "antd";
import Resume from "../pages/Resume";
import { DarkModeContext } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import GithubHeatmap from "../components/GithubHeatmap";
import MusicPlayer from "../components/MusicPlayer";

const ProjectDetails = [
  {
    id: 1,
    title: "Focus Planner",
    imgUrl: "/2026Projects/focusPlanner.png",
    URL: "https://focus-planner-mu.vercel.app/",
    source:
      "https://github.com/SharwanKunwar/FocusPlanner",
    description:
      "A modern focus planner that helps users organize tasks, set daily goals, track progress, and boost productivity with a clean, distraction-free interface.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "March 21, 2026, 11:00 PM",
  },
  {
    id: 2,
    title: "Fack-Data-Builder",
    imgUrl: "/2026Projects/202601.png",
    URL: "https://fake-data-builder.vercel.app/",
    source: "https://github.com/SharwanKunwar/Fake-Data-Builder",
    description:
      "A tool that generates realistic fake data for testing and development. Built to simplify workflows, experiment with datasets, and make development faster and easier.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Dec 5, 2025, 2:06 PM",
  },
  {
    id: 3,
    title: "Find Images",
    imgUrl: "/Project-IMG/SearchImg.png",
    URL: "https://find-images-three.vercel.app/",
    source: "https://github.com/SharwanKunwar/Find-Images",
    description:
      "A React image gallery using Pexels API to search, view, and download images. Features responsive grid, pagination, loading state, and error toasts.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 8, 2025, 3:20 PM",
  },
  {
    id: 4,
    title: "Gradient Generator",
    imgUrl: "/Project-IMG/GG.png",
    URL: "https://gradient-generator-six-pied.vercel.app/",
    source: "https://github.com/SharwanKunwar/gradient-generator",
    description:
      "A React + Tailwind app to generate beautiful linear & radial gradients. Preview, copy CSS, and explore random color combos. Fun & responsive! 🎨⚛️",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 7, 2025, 2:20 PM",
  },
];

function Home() {
  const [more, setMore] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);


  // Scroll to top when page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    //  🔥 HAPTIC FEEDBACK ENGINE
  
  const vibrate = (pattern) => {
    if (navigator.vibrate) navigator.vibrate(pattern);
  };

  const haptic = {
    tap: () => vibrate(15), // micro tap
    soft: () => vibrate(30), // light tap
    success: () => vibrate([30, 20, 80]), // success feel
  };

  return (
    <div id="home" className="min-h-screen flex items-start justify-start">
      <Container className={`min-h-[200vh] p-4 md:p-10 md:pt-0 `}>
        <div className="md:h-12.5 h-6.25"></div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 15, filter: "blur(7px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "none" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="mt-19 mb-2">
            <p
              className={`inline-block rounded-full text-sm py-1 border  backdrop-blur-sm px-3  hover:animate-pulse ${isDarkMode ? "text-red-400 border-indigo-400" : "text-red-400/50 border-indigo-400/30"}`}
            >
              Full Stack Developer
            </p>
          </div>

          <div className="">
            <h1
              className={`text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 ${isDarkMode && "text-white"}`}
            > Sharwan Jung Kunwar </h1>
            
            <div className="h-[30px] flex justify-start items-center">
              {/* MusicPlayer haptic on play/pause inside component */}
            <MusicPlayer haptic={haptic} />  
            </div>
          </div>

          <p className="text-neutral-400 pt-3 mb-5 md:text-sm text-sm max-w-[90%]">
            I turn ideas into working projects, welcome chaos, and see bugs as
            opportunities to learn. I build, break, and iterate
            relentlessly—sometimes breaking more than I create, but always
            improving.
          </p>
        </motion.section>

        {/* Hero Buttons */}
        <section className="w-full flex justify-start items-center flex-wrap gap-5 mt-4">
          <motion.button
            initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "none" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onClick={() => {
              haptic.soft();
              setMore(!more);
            }}
            className="border border-black/30 rounded px-5 bg-indigo-400 text-white py-1 text-[13px] mastShadow hover:bg-indigo-500 hover:border-indigo-500"
          >
            My Story
          </motion.button>

          <a target="_blank" href="https://github.com/SharwanKunwar/Dev">
            <motion.button
              initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "none" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onClick={haptic.tap}
              className={`border border-black/30 px-2 py-1 text-[13px] hover:text-white hover:bg-indigo-500 rounded mastShadow hover:border-indigo-500 ${isDarkMode ? "mastWhiteShadow" : ""}`}
            >
              🌟 Give Star
            </motion.button>
          </a>

          <a target="_blank" href="https://github.com/SharwanKunwar">
            <motion.button
              initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "none" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              onClick={haptic.tap}
              className={`border border-black/30 px-2 py-1 text-[13px] hover:text-white hover:bg-indigo-500 rounded mastShadow hover:border-indigo-500 ${isDarkMode ? "mastWhiteShadow" : ""}`}
            >
              <section className="flex items-center justify-center gap-2"><SiGithub/> Follow Me</section>
            </motion.button>
          </a>
        </section>

        {/* Github Heatmap */}
        <div
          className={`md:flex hidden my-10 bg-gray-50/30 backdrop-blur-2xl rounded-md shadow-sm ${isDarkMode && "bg-slate-800 mastWhiteShadow"}`}
        >
          <GithubHeatmap />
        </div>

        {/* My Story Expanded */}
        {more && (
          <motion.section
            initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "none" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mt-3"
          >
           <p className="text-neutral-400 text-sm md:text-sm max-w-full">
              I started my coding journey with C, learning everything on my own through
              trial and error. From building simple logic programs to developing Android
              apps and modern web applications with React, I’ve gradually expanded into
              backend development using Spring Boot and PostgreSQL. I enjoy building,
              breaking, and improving systems every day.
            </p>

            <section className="mt-10 w-full text-neutral-400 md:text-sm text-sm max-w-2xl">
              <p>
                If Googling me is your thing—go ahead. You can find me across
                the web here:
              </p>

              <div className="grid md:grid-cols-9 grid-cols-5 gap-1 md:mt-3 mt-5">
                <section className="flex justify-start items-center">
                  <Button>
                    <a
                      href="https://www.facebook.com/sravana.kumvara/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-blue-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                    </a>
                  </Button>
                </section>

                <section className="flex justify-start items-center">
                  <Button>
                    <a
                      href="https://www.linkedin.com/in/sharwan-kunwar-95a919317/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-blue-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                    </a>
                  </Button>
                </section>

                <section className="flex justify-start items-center">
                  <Button>
                    <a
                      href="https://github.com/SharwanKunwar"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub
                        className={`text-black w-6 h-6 hover:text-gray-300 transition-colors duration-200 ${
                          isDarkMode && "text-black"
                        }`}
                      />
                    </a>
                  </Button>
                </section>
              </div>
            </section>
          </motion.section>
        )}

        {/* Favorite Projects */}
        <div className="mt-10">
          <h1
            className={`text-2xl font-medium mb-2 underline ${isDarkMode && "text-white"}`}
          >
            Progress in Progress
          </h1>
          <p className="text-neutral-400 mb-2">
            Explore my coding journey through a mix of projects...
          </p>
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-5 py-5">
            {ProjectDetails.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                img={item.imgUrl}
                des={item.description}
                SUrl={item.source}
                PUrl={item.URL}
                Stack={item.teck}
                dt={item.date}
              />
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/projects">
              <Button size="large" className="w-full! mb-10" onClick={haptic.soft}>More Projects</Button>
            </Link>
          </div>
        </div>

        {/* Skills Marquee -------------------------------------------------------*/}
        <div className="relative w-full md:mt-10 mt-5 overflow-hidden ">
          {/* Top Row – Left to Right */}
          <div className="w-full h-24 overflow-hidden relative pt-2">
            <div className="flex gap-8 animate-marquee-left hover:animation-play-state-paused w-full ">
              {[...Array(2)].map((_, idx) =>
                [
                  { icon: SiReact, name: "React", color: "text-blue-400" },
                  {
                    icon: SiSpringboot,
                    name: "Spring Boot",
                    color: "text-green-600",
                  },
                  { icon: SiOpenjdk, name: "Java", color: "text-red-600" },
                  {
                    icon: SiPostgresql,
                    name: "PostgreSQL",
                    color: "text-blue-700",
                  },
                  { icon: SiDocker, name: "Docker", color: "text-blue-500" },
                  {
                    icon: SiTailwindcss,
                    name: "Tailwind",
                    color: "text-teal-400",
                  },
                  {
                    icon: SiGithub,
                    name: "GitHub",
                    color: isDarkMode ? "text-white" : "text-black",
                  },
                ].map(({ icon: Icon, name, color }, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-md shadow-md p-2"
                  >
                    <Icon className={`text-4xl mb-1 ${color}`} />
                    <span
                      className={`text-xs mt-1 text-center text-black ${isDarkMode && "text-white"}`}
                    >
                      {name}
                    </span>
                  </div>
                )),
              )}
            </div>
          </div>

          {/* Bottom Row – Right to Left */}
          <div className="mt-5 w-full h-25 overflow-hidden relative">
            <div className="flex gap-6 animate-marquee-right hover:animation-play-state-paused">
              {[...Array(2)].map((_, idx) =>
                [
                  {
                    icon: SiJavascript,
                    name: "JavaScript",
                    color: "text-yellow-400",
                  },
                  { icon: SiC, name: "C", color: "text-blue-400" },
                  {
                    icon: SiNextdotjs,
                    name: "Next.js",
                    color: isDarkMode ? "text-white" : "text-black",
                  },
                  { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
                  {
                    icon: SiFirebase,
                    name: "Firebase",
                    color: "text-yellow-500",
                  },
                  { icon: SiHtml5, name: "HTML5", color: "text-orange-600" },
                  { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
                  { icon: SiFramer, name: "Framer", color: "text-purple-500" },
                  {
                    icon: SiAntdesign,
                    name: "Ant Design",
                    color: "text-blue-600",
                  },
                ].map(({ icon: Icon, name, color }, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-md shadow-md p-2"
                  >
                    <Icon className={`text-3xl mb-1 ${color}`} />
                    <span
                      className={`text-xs mt-1 text-center text-black ${isDarkMode && "text-white"}`}
                    >
                      {name}
                    </span>
                  </div>
                )),
              )}
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <Resume />
      </Container>
    </div>
  );
}

export default Home;
