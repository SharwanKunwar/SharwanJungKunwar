import React, { useContext } from 'react'
import { motion } from 'motion/react';
import { DarkModeContext } from '../context/DarkModeContext';

function Resume() {
  const{isDarkMode} = useContext(DarkModeContext)
  return (
    <>
        <div id="education" className={`flex justify-center p-2 border-t border-b border-black/30 text-3xl mt-20 ${isDarkMode?"border-white/30":""}`}>Resume</div>
          <p className="pt-4 md:block hidden text-center text-neutral-500">Explore my journey through development projects and academic growth. This section highlights my work experience and education timeline, showcasing skills in both frontend and backend technologies including Java, Spring Boot, Android, and web development.</p>
          <p className="pt-4 md:hidden block text-center text-neutral-500">My journey in dev and education, with skills in Java, Spring Boot, Android & web.</p>
          
        <div className="flex flex-col gap-2 mt-10">
          <motion.h2 
          initial={{y:10,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="font-bold text-2xl">Work Experience</motion.h2>
          <motion.p
          initial={{y:20,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="text-neutral-500"
          >Quick glance at my frontend and backend skills, real-world projects, and growth as a software developer.</motion.p>
        </div>
        
        {/* work01 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative">

          <div className="absolute  w-5 left-0 top-0 rounded md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5 rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[50%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">Frontend Development</h1>
              <p className="text-indigo-500">July, 2025 - Current</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          >
            <div>
              <h1 className="font-bold text-[18px]">JavaScript / ReactJS / Nextjs</h1>
              <p className="text-[14px] mt-2 w-[90%] text-neutral-500">I began my frontend journey with HTML, CSS and javaScript, building simple static pages. Later, i explored Nextjs, which transformed the way i build modern web interfaces.</p>
              <p className={`text-black font-bold mt-3 text-[14px] ${isDarkMode?"text-gray-300":""}`}>I've Worked on several Frontent projects where i focused on:</p>
              <ol className="list-disc ml-4 text-[13px] mt-2 text-neutral-500">
                <li>Built with Next.js for server-side rendering and routing</li>
                <li>Styled using Tailwind CSS for responsive design</li>
                <li>Added smooth animations with Framer Motion</li>
                <li>Used lucide-react and react-icons for consistent iconography</li>
                <li>Implemented scroll-based navigation with active link highlighting</li>
              </ol>

            </div>
          </motion.div>
        </div>

        {/* work02 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[50%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">Exploring Programming</h1>
              <p className="text-indigo-500">Before 2025</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          >
            <div className="md:pl-5">
              <h1 className="font-bold text-[18px]">C / Java and Other programming practices</h1>
              <p className="text-[14px] mt-2 w-[90%] text-neutral-500">I focused mainly on programming fundamentals using <strong>C</strong> and <strong>Java</strong>. I practiced problem-solving, logic building, and core concepts like <strong>DSA</strong>, with diving into frontend or backend frameworks.</p>
              <p className={`text-black font-bold mt-3 text-[14px] ${isDarkMode?"text-gray-300":""}`}>I've worked on several projects:</p>
              <ol className="list-disc ml-4 text-[14px] mt-2 text-neutral-500">
                <li>Library management system</li>
                <li>Encryption and Decryption</li>
                <li>Condition based Ai 'lucifer'</li>
                <li>Student management system</li>
                <li>Several Games</li>
                <li>Menu based systems</li>
                <li>Password generator</li>
                <li>Units convertors</li>
              </ol>

            </div>
          </motion.div>
        </div>

        {/* //education */}
        <div className="flex flex-col gap-2 mt-20">
          <motion.h2 
          initial={{y:10,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="font-bold text-2xl">Education</motion.h2>
          <motion.p
          initial={{y:20,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="text-neutral-500"
          >
            An overview of my academic journey, highlighting my qualifications, coursework and skills gained to support my professional growth.</motion.p>
        </div>
        
        {/* edu01 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative ">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[40%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">DLMSS - KAILALI</h1>
              <p className="text-indigo-500">2076 - 2078</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          className="w-full"
          >
            <div className=" w-full">
              <h1 className="font-bold text-[18px] ">High School Diploma, Passed +2</h1>
              <p className="pt-2 text-neutral-500 text-[14px]">Graduated with a strong academic record. Engaged in extracurricular activities and clubs.</p>
            </div>
          </motion.div>
        </div>

        {/* edu02 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative ">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[40%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">RR Campus [TU]</h1>
              <p className="text-indigo-500">2081 - 2084</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          className="w-full"
          >
            <div className=" w-full">
              <h1 className="font-bold text-[18px] ">Bachelor's Student BCA</h1>
              <p className="pt-2 text-neutral-500 text-[14px]">Currently pursuing a Bachelor's degree, i focus on academic growth and skill development through hands-on projects, coding club events, and tech meetups, while also dedicating time to online courses and personal projects.</p>
            </div>
          </motion.div>
        </div>
    </>
  )
}

export default Resume
