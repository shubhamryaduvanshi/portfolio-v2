import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Hero = () => {
  const socials = [
    {
      icon: <BsGithub />,
      link: "https://github.com/shubhamryaduvanshi",
      hoverClass: "bg-blue-500",
    },
    {
      icon: <FiInstagram />,
      link: "https://www.instagram.com/shubham_y",
      hoverClass:
        "bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/Shubham44796564",
      hoverClass: "bg-blue-500",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/shubham-yadav-a48389201",
      hoverClass: "bg-blue-500",
    },
  ];
  return (
    <div>
      <div className="flex flex-col max-w-7xl mx-auto py-60 justify-center items-center">
        <p className="text-xs uppercase">Let's make something great together</p>
        <p className="text-2xl md:text-4xl font-bold text-gray-600 pt-3 md:pt-4 pb-3 md:pb-6 ">
          Hi, I'm <span className="text-blue-600">Shubham</span>
        </p>
        <p className="text-center text-2xl md:text-4xl font-semibold text-slate-500">
          {/* A Frontend Web Developer */}I build things for the web.
        </p>

        <p className="max-w-3xl text-justify md:text-center mt-6 md:mt-8 px-8 md:px-4 text-sm text-gray-600">
          I'm a Frontend Web Developer based in India. I specialize in building
          (and occasionally designing) exceptional websites, applications, and
          everything in between.
        </p>

        {/* social media icons */}
        <div className="flex flex-row mt-8 md:mt-12">
          {socials.map((social, index) => {
            return (
              <a href={social.link} target="_blank" rel="noreferrer">
                <div
                  key={index}
                  className={`flex flex-row items-center 
                    justify-center w-10 h-10 rounded-full shadow-xl
                    bg-white mr-4 cursor-pointer
                    transition duration-500 ease-in-out
                    text-gray-600 hover:text-white 
                    text-xl
                    hover:text-2xl
                    hover:font-bold
                    hover:bg-blue-500
                    `}
                >
                  {social.icon}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
