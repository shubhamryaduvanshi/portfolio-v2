import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const SocialMedia = () => {
  const socials = [
    {
      icon: <BsGithub />,
      link: "https://github.com/shubhamryaduvanshi",
      class: "githubIcon",
    },
    {
      icon: <FiInstagram />,
      link: "https://www.instagram.com/shubham_y",
      class: "instagramIcon",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/Shubham44796564",
      class: "twitterIcon",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/shubham-yadav-a48389201",
      class: "linkedinIcon",
    },
  ];
  return (
    <div className="flex flex-row mt-8 md:mt-12 justify-center">
      {socials.map((social, index) => {
        return (
          <a href={social.link} target="_blank" rel="noreferrer" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                y: { duration: index + 1 + 0.8 },
                opacity: { duration: index + 1 + 1 },
                delay: 1,
              }}
              viewport={{ once: true }}
              key={index}
              className={`flex flex-row items-center 
              justify-center w-10 h-10 rounded-full shadow-xl
             mr-4 cursor-pointer
              transition duration-500 ease-in-out
              text-gray-600
              text-xl
              hover:text-2xl
              hover:font-bold
              ${social.class}
              `}
              // hover:bg-blue-500
            >
              {social.icon}
            </motion.div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
