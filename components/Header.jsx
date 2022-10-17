import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="shadow-lg w-full sticky z-10 top-0 bg-white">
      <div className="flex justify-between items-center py-6 px-8  max-w-7xl mx-auto">
        <p className="text-2xl font-semibold font-greatVibes italic">Shubham</p>
        <div className="hidden md:flex uppercase">
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
        </div>

        <div className="md:hidden">
          {!showMenu && (
            <AiOutlineMenu className="text-2xl" onClick={toggleMenu} />
          )}

          {showMenu && (
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-white shadow-md transition duration-600 ease-in-out">
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex items-center ml-auto py-4 px-6 cursor-pointer ">
                  <AiOutlineCloseCircle
                    size={32}
                    className="text-2xl text-slate-500 hover:text-slate-800"
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
                </div>
              </div>
            </div>
          )}
        </div>
        {/* create an drawer component */}
      </div>
      {/* desktop view */}
    </div>
  );
};

export default Header;
