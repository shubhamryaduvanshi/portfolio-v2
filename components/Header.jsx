import { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { motion, useScroll, useSpring } from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MenuList = [
    {
      id: "home",
      displayName: "Home",
      href: "#home",
    },
    {
      id: "about",
      displayName: "About",
      href: "#about",
    },
    {
      id: "work",
      displayName: "Work",
      href: "#work",
    },
    {
      id: "skills",
      displayName: "Skills",
      href: "#skills",
    },
    {
      id: "projects",
      displayName: "Projects",
      href: "#projects",
    },
    {
      id: "contact",
      displayName: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="shadow-lg w-full sticky z-10 top-0 backdrop-blur-sm bg-white/70 dark:backdrop-blur-sm dark:bg-white/30 dark:text-slate-100">
      <motion.div
        className="relative h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mb-1"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <div className="flex justify-between items-center py-2 px-8  max-w-7xl mx-auto">
        <a className="w-14" href="#home">
          <Image src="/s-logo.png" width={100} height={100} alt="logo" />
        </a>
        <div className="md:hidden ml-auto pr-4">
          <ThemeToggler />
        </div>
        <div className="hidden md:flex uppercase items-center gap-5">
          {MenuList.map((menu) => (
            <a
              className=""
              onClick={(e) => onPress(e)}
              href={menu.href}
              key={menu.id}
            >
              <div data-to-scrollspy-id={menu.id} className="opacity-60">
                {menu.displayName}
              </div>
            </a>
          ))}
          {/* <a
            href="https://shubhamydv.netlify.app/Resume.pdf"
            rel="noreferrer"
            target="_blank"
            className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Resume
          </a> */}
          <ThemeToggler />
        </div>

        <div className="md:hidden">
          <HiOutlineMenuAlt3
            className="text-2xl ml-2"
            onClick={toggleMenu}
            style={{ opacity: showMenu ? 0 : 1 }}
          />
          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                opacity: { duration: 1 },
              }}
              className="absolute top-0 right-0 w-full h-screen bg-white  dark:backdrop-blur-sm dark:bg-black/80 shadow-md transition duration-600 ease-in-out"
            >
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex items-center ml-auto py-6 px-7 cursor-pointer ">
                  <AiOutlineCloseCircle
                    size={32}
                    className="text-2xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-400 mt-1"
                    onClick={toggleMenu}
                  />
                </div>
                <div className="flex flex-1 flex-col py-4 dark:text-slate-400">
                  {MenuList.map((menu) => (
                    <a
                      className="my-3"
                      onClick={(e) => {
                        onPress(e);
                        toggleMenu();
                      }}
                      href={menu.href}
                      key={menu.id}
                    >
                      <div data-to-scrollspy-id={menu.id}>
                        {menu.displayName}
                      </div>
                    </a>
                  ))}
                  <a
                    href="https://shubhamydv.netlify.app/Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        {/* create an drawer component */}
      </div>
      {/* desktop view */}
    </div>
  );
};

export default Header;
