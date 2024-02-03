import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { GiHobbitDwelling } from "react-icons/gi";
import { motion } from "framer-motion";

const About = () => {
  const aboutGrid = [
    {
      id: 1,
      icon: <AiFillHome size={20} />,
      title: "Residence",
      text: "Thane, India",
    },
    {
      id: 2,
      icon: <FaCalendarAlt size={20} />,
      title: "Age",
      text: Date().slice(11, 15) - 2000,
    },
    {
      id: 3,
      icon: <GiHobbitDwelling size={20} />,
      title: "Hobbies",
      text: "Travelling, Sketching",
    },
  ];

  return (
    <>
      <section id="about">
        <div className="max-w-7xl px-8 mx-auto pt-0 md:pt-10 pb-16 md:pb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="uppercase text-blue-600 text-lg"
          >
            About
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              x: { duration: 2 },
              opacity: { duration: 2 },
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="mt-6 text-3xl font-medium dark:text-slate-400"
          >
            Who I Am
          </motion.p>
          <div className="flex items-center justify-around flex-col-reverse md:flex-row">
            <div className="w-full px-2 md:max-w-2xl">
              <div className="mt-12 text-gray-600 md:text-md text-justify md:text-left dark:text-slate-400">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    x: { duration: 2 },
                    opacity: { duration: 2 },
                    delay: 1,
                  }}
                  viewport={{ once: true }}
                >
                  I&apos;m currently enrolled in the MCA program at Savitribai
                  Phule Pune University. As a Frontend Web Developer based in
                  India, my expertise lies in crafting outstanding websites and
                  applications, with occasional design work.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    x: { duration: 1 },
                    opacity: { duration: 1 },
                    delay: 1.2,
                  }}
                  className="mt-6"
                  viewport={{ once: true }}
                >
                  My passion lies in creating digital entities that thrive on
                  the internet. I am dedicated to constructing responsive
                  front-end web applications and concurrently expanding my
                  knowledge in backend technologies.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    x: { duration: 1 },
                    opacity: { duration: 1 },
                    delay: 1.3,
                  }}
                  viewport={{ once: true }}
                  className="mt-6"
                >
                  Presently, my primary emphasis is on developing accessible and
                  inclusive products, along with enhancing digital experiences
                  for diverse clients at Kuchnaya Technolabs.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:grid-cols-3">
                  {aboutGrid.map((item) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "linear",
                        x: { duration: 1 },
                        opacity: { duration: 1 },
                        delay: item.id + 0.2,
                      }}
                      viewport={{ once: true }}
                      key={item.id}
                      className="flex items-center mt-4 md:mt-6"
                    >
                      <div
                        className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-blue-300 rounded-full
                        dark:backdrop-blur-sm dark:bg-white/30 dark:text-slate-100"
                      >
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-md font-medium">{item.title}</p>
                        <p className="text-gray-600 text-sm dark:text-slate-400">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              className="rounded-full overflow-hidden bg-blue-100 z-0 mt-10 md:mt-12 md:ml-10 p-2 flex shadow-lg items-center justify-center dark:bg-white/10"
              initial={{ opacity: 0, x: 10, scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              // viewport={{ once: true }}
            >
              <Image
                // src={"/assets/images/gamerProfile.webp"}
                src={"/myProfile.png"}
                alt="Profile Picture"
                width={320}
                height={320}
                className="rounded-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
