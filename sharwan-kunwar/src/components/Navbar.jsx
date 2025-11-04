import React, { useRef, useState, useEffect, useContext } from 'react';
import { Container } from './Container';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import { Button, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [hoverRect, setHoverRect] = useState({ width: 0, left: 0 });
  const [open, setOpen] = useState(false);
  const navRefs = useRef([]);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [openFriend, setOpenFriend] = useState(false);
  const [broCode, setBroCode] = useState("");

  const navigate = useNavigate();


  const navItems = [
    { title: 'Home', url: '/home' },
    { title: 'Projects', url: '/projects' },
    { title: 'Blog', url: '/blog' },
  ];

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hover underline animation
  const handleMouseEnter = (index) => {
    const rect = navRefs.current[index].getBoundingClientRect();
    setHoverRect({ width: rect.width, left: navRefs.current[index].offsetLeft });
    setHovered(index);
  };


   // 🔒 Disable background scroll when nav is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (important for avoiding stuck scroll)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleLogoClick = () => {
    setOpenFriend(true)
  }

  const checkCode = () =>{
    const passCode = "#include<07>";
    if(passCode === broCode){
      navigate("/music")
      setBroCode("")
      setOpenFriend(false)
    }else{
      alert(`Bro code is not matched !! ${"\n"} Contact Admin to explore`)
    }
  }

  return (
    <Container className="flex justify-center">
      <motion.nav
        animate={{
          boxShadow: scrolled
            ? isDarkMode
              ? '0px 4px 10px rgba(255, 255, 255, 0.3)' // White shadow in dark mode
              : '0px 4px 10px rgba(0, 0, 0, 0.3)'       // Black shadow in light mode
            : 'none',
            borderRadius: scrolled ? 100 : 0,
          y: scrolled ? 10 : 0,
          width: scrolled ? '50%' : '100%',
        }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className="fixed md:inset-x-0 top-0 z-50 md:max-w-6xl md:mx-auto flex items-center justify-between px-3 py-2 bg-white/10 backdrop-blur-2xl "
      >
        {/* Logo */}
        
          <motion.img
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 3600 }}
            src="/me.jpg"
            alt="logo"
            onClick={handleLogoClick}
            className="h-12 w-12 rounded-full bg-blue-200 p-1 object-cover mastShadow"
          />
        

        <div className="flex gap-3 items-center">
          {/* Mobile menu */}
          <div className="md:hidden">
            {open ? (
              <X onClick={() => setOpen(false)} className="w-9 h-9 cursor-pointer mr-2" />
            ) : (
              <Menu onClick={() => setOpen(true)} className="w-9 h-9 cursor-pointer mr-2" />
            )}
          </div>

          {/* Desktop navigation */}
          <div
            className="relative md:flex space-x-6 items-center hidden"
            onMouseLeave={() => setHovered(null)}
          >
            {/* Hover underline */}
            {hovered !== null && (
              <motion.div
                layout
                className={`absolute top-0 h-full  rounded-md z-0 ${isDarkMode?"bg-neutral-400":"bg-slate-300"}`}
                initial={false}
                animate={{ width: hoverRect.width, left: hoverRect.left }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}

            {/* Nav links */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                ref={(el) => (navRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                to={item.url}
                scroll={true}
                className={`relative mr-10  px-2 py-2 text-sm font-medium text-black  z-10 ${isDarkMode? "text-white":"text-black"}`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className={`text-white bg-black/50 md:flex md:justify-center md:items-center rounded-full w-10 h-10 mastShadow hidden ${isDarkMode?"text-white mastWhiteShadow":""}`}
          >
            {isDarkMode ? <FaSun color='gold' size={20} /> : <FaMoon color='white' size={20} />}
          </button>

        </div>
      </motion.nav>
        {/* Mobile Fullscreen Nav */}
          {
            open && (
              <>
                <div className={`fixed z-49 w-screen h-screen bg-white/30 backdrop-blur-2xl left-0 top-0 flex justify-center items-center dark:bg-neutral-800/30  `}>
                  <motion.div 
                  initial={{opacity:0, y:200}}
                  animate={{opacity:1, y:0}}
                  // transition={{duration:0.3}}
                  className={`bg-linear-to-r from-indigo-400 to-pink-400 w-[90%] h-[70%] rounded-md mastWhiteShadow`}>
                    <div className='flex justify-between w-full items-center'>
                      <h1 className='text-2xl py-4 px-8 border-b border-white/30'>Menu</h1>
                      {/* Dark mode toggle for phone*/}
                      <button
                        onClick={toggleDarkMode}
                        className={`text-black  flex justify-center items-center rounded-full w-10 h-10 mastShadow mr-5  ${isDarkMode?"text-white mastWhiteShadow":""}`}
                      >
                        {isDarkMode ? <FaSun color='gold' size={30} /> : <FaMoon color='white' size={30} />}
                      </button>
                      </div>
                    <div className=' h-full flex justify-center items-start pt-20'>
                      <nav className='text-lg text-white'>
                        <ul className='flex flex-col gap-5'>
                          <Link to="home">
                            <li className='bg-black/30 backdrop-blur-2xl text-center px-30 py-2 rounded-sm mastWhiteShadow'>Home</li>
                          </Link>
                          <Link to="projects">
                            <li className='bg-black/30 backdrop-blur-2xl text-center px-30 py-2 rounded-sm mastWhiteShadow'>Projects</li>
                          </Link>
                          <Link to="blog">
                            <li className='bg-black/30 backdrop-blur-2xl text-center px-30 py-2 rounded-sm mastWhiteShadow'>Blog</li>
                          </Link>
                        </ul>
                      </nav>
                    </div>
                  </motion.div>
                </div>
              </>
            )
          }

          <Modal open={openFriend} onCancel={()=>setOpenFriend(false)} footer={null} >
            <div className=''>
              <h1 className='text-lg font-medium mb-2'>Private Zone</h1>
              <Input value={broCode} onChange={(e)=>setBroCode(e.target.value)} placeholder='Enter Bro code'/>
              <Button onClick={checkCode} className='mt-2 px-10!'>Check</Button>
            </div>
          </Modal>
    </Container>
  );
}

export default Navbar;
