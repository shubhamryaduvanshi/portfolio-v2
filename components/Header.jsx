import { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { motion, useScroll, useSpring } from "framer-motion";
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

  return (
    <div className="shadow-lg w-full sticky z-10 top-0 bg-white">
      <motion.div
        className="relative h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mb-1"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <div className="flex justify-between items-center py-4 px-8  max-w-7xl mx-auto">
        <a className="text-2xl font-semibold font-greatVibes italic" href="#">
          Shubham
        </a>
        <div className="hidden md:flex uppercase items-center">
          <a className="mx-3" href="#">
            Home
          </a>
          <a className="mx-3" href="#about">
            About
          </a>
          <a className="mx-3" href="#work">
            Work
          </a>
          <a className="mx-3" href="#skills">
            Skills
          </a>
          <a className="mx-3" href="#projects">
            Projects
          </a>
          <a className="mx-3" href="#contact">
            Contact
          </a>
          <a
            href="https://shubhamydv.netlify.app/Shubham_Resume.pdf"
            rel="noreferrer"
            target="_blank"
            className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          {!showMenu && (
            <AiOutlineMenu className="text-2xl" onClick={toggleMenu} />
          )}

          {showMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                opacity: { duration: 1 },
              }}
              className="absolute top-0 right-0 w-full h-screen bg-white shadow-md transition duration-600 ease-in-out"
            >
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex items-center ml-auto py-4 px-6 cursor-pointer ">
                  <AiOutlineCloseCircle
                    size={32}
                    className="text-2xl text-slate-500 hover:text-slate-800 mt-3"
                    onClick={toggleMenu}
                  />
                </div>
                <div className="flex flex-1 flex-col py-4">
                  <a className="my-3" href="#" onClick={toggleMenu}>
                    Home
                  </a>
                  <a className="my-3" href="#about" onClick={toggleMenu}>
                    About
                  </a>
                  <a className="my-3" href="#work" onClick={toggleMenu}>
                    Work
                  </a>
                  <a className="my-3" href="#skills" onClick={toggleMenu}>
                    Skills
                  </a>
                  <a className="my-3" href="#projects" onClick={toggleMenu}>
                    Projects
                  </a>
                  <a className="my-3" href="#contact" onClick={toggleMenu}>
                    Contact
                  </a>
                  <a
                    href="https://shubhamydv.netlify.app/Shubham_Resume.pdf"
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
