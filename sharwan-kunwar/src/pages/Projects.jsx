import React, { useContext, useState } from 'react'
import { Container } from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import { DarkModeContext } from '../context/DarkModeContext';
import { Button } from 'antd';

const ProjectDetails = [
  {
    id: 26,
    title: "Super Site",
    imgUrl: "/work/superSite.png",
    URL: "https://super-site-rho.vercel.app/",
    source: "https://github.com/SharwanKunwar/SuperSite",
    description: "SuperSite collects essential websites in one place. Built with React.js, TailwindCSS, and Motion, it lets users explore and search resources by category with a clean design and smooth animations.",
    teck: ["ReactJS", "Tailwindcss", "Motion"],
    date: "Nov 9, 2025, 9:34 PM"
  },
  {
    id: 25,
    title: "Dev Tools",
    imgUrl: "/work/DevTool.png",
    URL: "https://dev-tools-bay.vercel.app/",
    source: "https://github.com/SharwanKunwar/Dev-Tools",
    description: "Dev Tools is a curated collection of websites and resources for developers, including coding platforms, APIs, design inspiration, and productivity tools — all in one place.",
    teck: ["ReactJS", "Tailwindcss", "Motion"],
    date: "Oct 30, 2025, 1:12 PM"
  },
  {
    id: 24,
    title: "LeadCoder",
    imgUrl: "/Project-IMG/LeadCoder.png",
    URL: "https://lead-coder.vercel.app/",
    source: "https://github.com/SharwanKunwar/LeadCoder",
    description: "A concept-driven coding platform where users learn programming basics through interactive examples and solve challenges to strengthen their skills.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 20, 2025, 10:12 AM"
  },
  {
    id: 23,
    title: "Focus Planner",
    imgUrl: "/Project-IMG/Focus.png",
    URL: "https://focus-ten-omega.vercel.app/",
    source: "https://github.com/SharwanKunwar/Focus",
    description: "Focus Planner is a productivity web app to organize tasks, track progress, take notes, play study music, and get smart reminders for focused work.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 17, 2025, 11:10 AM"
  },
  {
    id: 22,
    title: "Find Images",
    imgUrl: "/Project-IMG/SearchImg.png",
    URL: "https://find-images-three.vercel.app/",
    source: "https://github.com/SharwanKunwar/Find-Images",
    description: "A React image gallery using Pexels API to search, view, and download images. Features responsive grid, pagination, loading state, and error toasts.",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 8, 2025, 3:20 PM"
  },
  {
    id: 21,
    title: "Avatar Generator",
    imgUrl: "/work/avatarGenerator.png",
    URL: "https://generate-avatar-phi.vercel.app/",
    source: "https://github.com/SharwanKunwar/generate-avatar",
    description: "Instantly create unique avatars in illustration, cartoon, robot, and pixel styles. Download or copy with one click! ⚡🎨",
    teck: ["ReactJS", "Tailwindcss", "Animate.css", "Toastify"],
    date: "Oct 8, 2025, 9:31 AM"
  },
  {
    id: 20,
    title: "Youtube-Thumbnail-Downloader",
    imgUrl: "/work/youtube.png",
    URL: "https://download-youtube-thumbnail.vercel.app/",
    source: "https://github.com/SharwanKunwar/Download-Youtube-Thumbnail",
    description: "A lightweight JavaScript tool to instantly fetch and download a YouTube video’s thumbnail—fast, simple, and browser-ready.",
    teck: ["ReactJS", "TailwindCSS", "Toastify"],
    date: "Oct 9, 2025, 4:24 PM"
  },
  {
    id: 19,
    title: "Gradient Generator",
    imgUrl: "/Project-IMG/GG.png",
    URL: "https://gradient-generator-six-pied.vercel.app/",
    source: "https://github.com/SharwanKunwar/gradient-generator",
    description: "A React + Tailwind app to generate beautiful linear & radial gradients. Preview, copy CSS, and explore random color combos. Fun & responsive! 🎨⚛️",
    teck: ["ReactJS", "Tailwindcss", "Motion", "antd"],
    date: "Oct 9, 2025, 9:38 PM"
  },
  {
    id: 18,
    title: "Portfolio Design",
    imgUrl: "/work/portfolio.png",
    URL: "https://portfolio-design-dusky.vercel.app/",
    source: "https://github.com/SharwanKunwar/Portfolio-Design",
    description: "A modern portfolio site showcasing frontend skills, design, and live deployment on Vercel. only for big screen",
    teck: ["NextJS", "TailwindCSS", "Motion"],
    date: "Jul 29, 2025, 7:35 PM"
  },
  {
    id: 17,
    title: "Traval CheckPoint",
    imgUrl: "/work/travel.png",
    URL: "https://travel-check-point.vercel.app/",
    source: "https://github.com/SharwanKunwar/Travel-checkPoint",
    description: "Demo Trival site. build using motion, tailwindcss",
    teck: ["NextJS", "Tailwindcss", "Motion"],
    date: "Jul 25, 2025, 2:25 PM"
  },
  {
    id: 16,
    title: "Loaders animation",
    imgUrl: "/work/Loaders.png",
    URL: "https://loaders-motion.vercel.app/",
    source: "https://github.com/SharwanKunwar/Loaders-Motion",
    description: "A sleek and simple loaders animation built using Framer Motion, perfect for enhancing user experience with smooth, modern visuals.",
    teck: ["NextJS", "TailwindCSS", "Motion"],
    date: "Jul 24, 2025, 10:42 PM"
  },
  {
    id: 15,
    title: "3D Book Slider",
    imgUrl: "/work/3dBook.png",
    URL: "https://3-d-book-slider.vercel.app/",
    source: "https://github.com/SharwanKunwar/3D-Book-Slider",
    description: "Interactive 3D book with page flipping, animated scrolling text, and realistic lighting, built using Next.js, React Three Fiber, and Tailwind CSS.",
    teck: ["NextJS", "TailwindCSS", "R3F"],
    date: "Jul 7, 2025, 10:22 PM"
  },
  {
    id: 14,
    title: "3D Scene | R3F",
    imgUrl: "/work/space.png",
    URL: "https://3d-scene-mu.vercel.app/",
    source: "https://github.com/SharwanKunwar/3D-Scene-R3F",
    description: "Interactive 3D scene with GLB model, HDR lighting, smooth animations, and orbit controls, built using React Three Fiber, Next.js, and Tailwind CSS.",
    teck: ["NextJS", "TailwindCSS", "R3F"],
    date: "Jul 7, 2025, 5:47 PM"
  },
  {
    id: 13,
    title: "Heart 3D | R3F",
    imgUrl: "/work/heart.png",
    URL: "https://heart-3d-r3-f.vercel.app/",
    source: "https://github.com/SharwanKunwar/heart-3d-R3F",
    description: "Explore an interactive 3D heart model built with React Three Fiber, Next.js, and Tailwind CSS. A creative demo showcasing WebGL, responsiveness, and modern UI in one project.",
    teck: ["NextJS", "TailwindCSS", "R3F"],
    date: "Jul 7, 2025, 10:57 AM"
  },
  {
    id: 12,
    title: "Portfolio",
    imgUrl: "/work/work001.png",
    URL: "https://sharwan-jung-kunwar.vercel.app/",
    source: "https://github.com/SharwanKunwar/Sharwan-Jung-Kunwar",
    description: "A responsive and modern personal portfolio built with Next.js and Tailwind CSS, showcasing my projects, skills, and passion for full-stack development.",
    teck: ["ReactJS", "Tailwindcss", "Motion"],
    date: "Jun 27, 2025, 12:19 PM"
  },
  {
    id: 11,
    title: "Stranger",
    imgUrl: "/work/Stranger.png",
    URL: "https://stranger-cyan.vercel.app/",
    source: "https://github.com/SharwanKunwar/Draggable",
    description: "A sleek React + Vite app by Sharwan Kunwar enabling draggable UI components with smooth interactions and minimal setup.",
    teck: ["ReactJS", "TailwindCSS", "Motion"],
    date: "Jun 19, 2025, 3:57 PM"
  },
  {
    id: 10,
    title: "Todo App",
    imgUrl: "/work/todo.png",
    URL: "https://progress-tracker-drab.vercel.app/",
    source: "https://github.com/SharwanKunwar/Progress-Tracker",
    description: "Todo App is a sleek and responsive task manager that lets users add, edit, and delete tasks with ease. It features clean UI, smooth interactions, and modern web technologies for a seamless experience.",
    teck: ["ReactJS", "TailwindCSS", "Motion"],
    date: "Jun 13, 2025, 9:58 AM"
  },
  {
    id: 9,
    title: "Smart video player",
    imgUrl: "/work/SmartVideoPlayer.png",
    URL: "https://smart-video-player.vercel.app/",
    source: "https://github.com/SharwanKunwar/SmartVideoPlayer",
    description: "Smart Video Player is an intelligent video app that uses face tracking to play when the user is looking and pause when they look away. Built with react, tailwindCSS, and JavaScript for a smooth experience.",
    teck: ["ReactJS", "TailwindCSS", "Face-api"],
    date: "Jun 9, 2025, 11:57 AM"
  },
  {
    id: 8,
    title: "Programming Notes",
    imgUrl: "/work/work02.png",
    URL: "https://programming-notes-eight.vercel.app/",
    source: "https://github.com/SharwanKunwar/Programming-Notes",
    description: "Programming Notes is a responsive web app that helps developers organize and access key concepts. Explore notes, syntax, and examples—all in one place. Built for simplicity and learning.",
    teck: ["ReactJS", "TailwindCSS"],
    date: "Jun 7, 2025, 9:06 PM"
  },
  {
    id: 7,
    title: "BCA Aspirant",
    imgUrl: "/work/work03.png",
    URL: "https://bca-aspirant-hub.vercel.app/",
    source: "https://github.com/SharwanKunwar/BCA-Aspirant-Hub-0.1",
    description: "A modern React-based BCA project showcasing animations, custom hooks, and responsive UI — built for learning, creativity, and smooth user experience.",
    teck: ["ReactJS", "TailwindCSS", "Motion", "GSAP"],
    date: "May 12, 2025, 8:55 PM"
  },
  {
    id: 6,
    title: "My Portfolio 07",
    imgUrl: "/work/work01.png",
    URL: "https://sharwankunwar.github.io/My-Portfolio-07/",
    source: "https://github.com/SharwanKunwar/My-Portfolio-07",
    description: "My Portfolio 07 is a personal website showcasing my projects, skills, and passion. With a clean design and smooth navigation, it highlights my work, tech stack, and contact information.",
    teck: ["HTML", "CSS", "javaScript", "PHP"],
    date: "May 2, 2025, 9:09 PM"
  },
  {
    id: 5,
    title: "Quiz",
    imgUrl: "/work/quiz.png",
    URL: "https://sharwankunwar.github.io/Quiz-With-Moving-Button/",
    source: "https://github.com/SharwanKunwar/Quiz-With-Moving-Button",
    description: "An interactive quiz experience where the submit button playfully moves away until you answer — fun, engaging, and surprisingly challenging!",
    teck: ["HTML", "CSS", "javaScript"],
    date: "Apr 4, 2025, 10:24 PM"
  },
  {
    id: 4,
    title: "Happyness Dozz",
    imgUrl: "/work/happy.png",
    URL: "",
    source: "https://github.com/SharwanKunwar/Frontend-development/tree/main/FRONTEND-PRACTICE%20PAGES/web01",
    description: "A demo landing page",
    teck: ["HTML", "CSS"],
    date: "Feb 27, 2025, 10:32 PM"
  },
  {
    id: 3,
    title: "Demo Digitalize Ideas",
    imgUrl: "/work/work06.png",
    URL: "",
    source: "https://github.com/SharwanKunwar/Frontend-development/tree/main/FRONTEND-PRACTICE%20PAGES/web01",
    description: "A demo landing page",
    teck: ["HTML", "CSS"],
    date: "Feb 26, 2025, 11:37 AM"
  },
  {
    id: 2,
    title: "Home Page",
    imgUrl: "/work/HomePage.png",
    URL: "https://sharwankunwar.github.io/Web-UI/",
    source: "https://github.com/SharwanKunwar/Web-UI",
    description: "This is not my project but i did little bit of modification. #MaterialUI",
    teck: ["HTML", "CSS", "javaScript"],
    date: "Feb 21, 2025, 8:25 PM"
  },
  {
    id: 1,
    title: "CasinoPlanet",
    imgUrl: "/work/work05.png",
    URL: "https://sharwankunwar.github.io/Casino-online/",
    source: "https://github.com/SharwanKunwar/Casino-online",
    description: "CasinoPlanet is a web-based casino game with simple, fun gameplay. Built using HTML, CSS, and JavaScript, it offers a playful way to explore basic front-end development concepts.",
    teck: ["HTML", "CSS", "javaScript"],
    date: "Jan 16, 2025, 5:39 PM"
  }
];


function Projects() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [visibleCount, setVisibleCount] = useState(4); 
   const allLoaded = visibleCount >= ProjectDetails.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // load 2 more each click
  };

  return (
    <Container>
      <div className='w-full pt-25 flex flex-col justify-center items-center gap-4'>

        <div className='bg-linear-to-br from-indigo-300 to-pink-300 via-sky-200 backdrop-blur-2xl h-[200px] w-[95%] rounded-xl lg:flex lg:flex-row lg:justify-center items-center flex-col mastShadow gap-3 p-2 hidden'>
          {/* show icons */}
          <div className='bg-white/30 lg:w-[20%] w-45 lg:h-full lg:rounded-md rounded-full backdrop-blur-2xl mastShadow'>
            <img src="/icons.png" alt="icons" className='w-full h-full object-cover object-top'/>
          </div>

          {/* talk about */}
          <div className='bg-white/30 backdrop-blur-2xl lg:w-[80%] lg:h-full rounded-md lg:flex justify-center items-center mastShadow hidden'>
            <p className='p-5 text-black font-medium'>
              I build projects the way pirates chase treasure — with excitement, bad maps, and constant disasters.  
              Every bug feels personal, every fix feels heroic, and every crash reminds me that computers have feelings too — mostly anger.  
              <br /><br />
              Still, I keep coding, keep breaking, keep rebuilding — not because it’s easy,  
              but because chaos and creation have become my favorite kind of therapy.
            </p>
          </div>
        </div>
        <h1 className={`text-2xl font-medium text-start lg:w-[95%] lg:mt-3 w-[90%] ${isDarkMode && "text-white"}`}>All Projects</h1>

        {/* featured projects */}
        <div className=" w-[95%]">
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-5 py-3">
            {ProjectDetails.slice(0, visibleCount).map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                img={item.imgUrl}
                des={item.description}
                SUrl={item.source}
                PUrl={item.URL}
                Stack={item.teck}
                dt = {item.date}
              />
            ))}
          </div>
        </div>

        {/* Load More or End Message */}
        <div className="text-center my-10">
          {!allLoaded ? (
            <Button onClick={handleLoadMore}>Load More</Button>
          ) : (
            <p className='underline text-neutral-400 italic lg:px-0 px-10'>
              No more projects. Even I need a break. But next time you visit, something nasty might greet you. 🖤
            </p>
          )}
        </div>

      </div>
    </Container>
  );
}

export default Projects;
