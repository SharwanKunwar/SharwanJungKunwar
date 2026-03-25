import React, { useRef, useState, useEffect, useContext } from 'react';
import { Container } from './Container';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import { Button, Input, Modal } from 'antd';

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

  /* =========================
     🔥 Natural Haptic Engine
     (No UI Changes)
  ========================== */
  const vibrate = (pattern) => {
    if (!navigator.vibrate) return;
    navigator.vibrate(pattern);
  };

  const haptic = {
    tap: () => vibrate(15),                  // micro tap
    soft: () => vibrate(30),                 // light tap
    openMenu: () => vibrate(35),
    closeMenu: () => vibrate(20),
    success: () => vibrate([30, 20, 80]),
    error: () => vibrate([80, 40, 120]),
  };

  const navItems = [
    { title: 'Home', url: '/home' },
    { title: 'Projects', url: '/projects' },
    { title: 'MySelf', url: '/mySelf' },
  ];

  /* Scroll Effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Disable background scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const handleMouseEnter = (index) => {
    const rect = navRefs.current[index].getBoundingClientRect();
    setHoverRect({ width: rect.width, left: navRefs.current[index].offsetLeft });
    setHovered(index);
  };

  const handleLogoClick = () => {
    haptic.soft();
    setOpenFriend(true);
  };

  const checkCode = () => {
    haptic.tap();

    const passCode = "#include<07>";

    if (passCode === broCode) {
      haptic.success();
      navigate("/music");
      setBroCode("");
      setOpenFriend(false);
    } else {
      haptic.error();
      alert(`Bro code is not matched !! \n Contact Admin to explore`);
    }
  };

  return (
    <Container className="flex justify-center">
      <motion.nav
        animate={{
          boxShadow: scrolled
            ? isDarkMode
              ? '0px 4px 10px rgba(255,255,255,0.3)'
              : '0px 4px 10px rgba(0,0,0,0.3)'
            : 'none',
          borderRadius: scrolled ? 100 : 0,
          y: scrolled ? 10 : 0,
          width: scrolled ? '50%' : '100%',
        }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className="fixed md:inset-x-0 top-0 z-50 md:max-w-6xl md:mx-auto flex items-center justify-between px-3 py-2 bg-white/10 backdrop-blur-2xl"
      >
        {/* Logo */}
        <motion.img
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 3600 }}
          src="/icons/logo.gif"
          alt="logo"
          onClick={handleLogoClick}
          className="h-12 w-12 rounded-full bg-blue-200 p-0.5 object-cover mastShadow"
        />

        <div className="flex gap-3 items-center">

          {/* Mobile Menu */}
          <div className="md:hidden">
            {open ? (
              <X
                onClick={() => {
                  haptic.closeMenu();
                  setOpen(false);
                }}
                className="w-9 h-9 cursor-pointer mr-2"
              />
            ) : (
              <Menu
                onClick={() => {
                  haptic.openMenu();
                  setOpen(true);
                }}
                className="w-9 h-9 cursor-pointer mr-2"
              />
            )}
          </div>

          {/* Desktop Nav */}
          <div
            className="relative md:flex space-x-6 items-center hidden"
            onMouseLeave={() => setHovered(null)}
          >
            {hovered !== null && (
              <motion.div
                layout
                className={`absolute top-0 h-full rounded-md z-0 ${isDarkMode ? "bg-neutral-400" : "bg-slate-300"}`}
                initial={false}
                animate={{ width: hoverRect.width, left: hoverRect.left }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}

            {navItems.map((item, index) => (
              <Link
                key={index}
                ref={(el) => (navRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={haptic.tap}
                to={item.url}
                className={`relative px-2 py-2 text-sm z-10 ${isDarkMode ? "text-white" : "text-black"}`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              haptic.tap();
              toggleDarkMode();
            }}
            className={`rounded-full w-10 h-10 mastBlueShadow hidden md:flex justify-center items-center ${isDarkMode && "mastOrangeShadow"}`}
          >
            {isDarkMode ? <FaSun color='gold' size={20} /> : <FaMoon color='black' size={20} />}
          </button>

        </div>
      </motion.nav>



      {/* // modile nav  */}
      {/* Mobile Menu Links */}
      {/* Mobile Fullscreen Nav */}
      {open && (
        <>
          <div
            className="fixed z-49 w-screen h-screen backdrop-blur-2xl left-0 top-0 flex justify-center items-center dark:bg-neutral-800/30"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: -120 }}
              // transition={{duration:0.3}}
              className="w-[90%] rounded-md mt-10"
            >
              {/* Header */}
              <div className="flex justify-between w-full items-center">
                <h1 className="text-2xl py-4 px-8 border-b border-white/30">Menu</h1>

                {/* Dark mode toggle for phone */}
                <button
                  onClick={toggleDarkMode}
                  className={`text-black flex justify-center items-center rounded-full w-10 h-10 mastShadow mr-5 ${
                    isDarkMode ? "text-white mastWhiteShadow" : ""
                  }`}
                >
                  {isDarkMode ? <FaSun color="gold" size={30} /> : <FaMoon color="white" size={30} />}
                </button>
              </div>

              {/* Navigation Links */}
              <div className="h-full flex justify-center items-start pt-20">
                <nav className="text-lg text-white">
                  <ul className="flex flex-col gap-5">
                    <Link to="home">
                      <li className="backdrop-blur-2xl text-center px-30 py-2 rounded-sm border border-white/50 shadow-sm">
                        Home
                      </li>
                    </Link>
                    
                    <Link to="projects">
                      <li className="backdrop-blur-2xl text-center px-30 py-2 rounded-sm border border-white/50 shadow-sm">
                        Projects
                      </li>
                    </Link>

                    <Link to="mySelf">
                      <li className="backdrop-blur-2xl text-center px-30 py-2 rounded-sm border border-white/50 shadow-sm">
                        MySelf
                      </li>
                    </Link>
                    
                  </ul>
                </nav>
              </div>
            </motion.div>
          </div>
        </>
      )}









      {/* Secret Modal */}
      <Modal
        open={openFriend}
        onCancel={() => {
          haptic.tap();
          setOpenFriend(false);
        }}
        footer={null}
      >
        <h1 className='text-lg font-medium mb-2'>Private Zone</h1>
        <Input
          value={broCode}
          onChange={(e) => setBroCode(e.target.value)}
          placeholder='Enter Bro code'
        />
        <Button onClick={checkCode} className='mt-2'>
          Check
        </Button>
      </Modal>
    </Container>
  );
}

export default Navbar;