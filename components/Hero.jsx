import Typewriter from "typewriter-effect";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col max-w-7xl mx-auto pt-48 md:pt-40 pb-60 justify-center items-center">
        <motion.p
          className="text-xs uppercase dark:text-slate-400"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            x: { duration: 1.5 },
            opacity: { duration: 5 },
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          Let&apos;s make something great together
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            x: { duration: 0.8 },
            opacity: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-slate-200 pt-3 md:pt-4 pb-3 md:pb-6 "
        >
          Hi, I&apos;m <span className="text-blue-600">Shubham</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            opacity: { duration: 2 },
            delay: 1,
          }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-4xl font-semibold text-slate-500 dark:text-slate-400"
        >
          <Typewriter
            options={{
              strings: [
                "I build things for the web.",
                "A MERN Stack Developer.",
                "A MEAN Stack Developer.",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            opacity: { duration: 2 },
            delay: 1.2,
          }}
          viewport={{ once: true }}
          className="max-w-3xl text-justify md:text-center mt-6 md:mt-8 px-8 md:px-4 text-md text-gray-600 dark:text-slate-400"
        >
          I am a Web Developer located in India, with expertise in crafting
          outstanding websites and applications. My skills extend to both
          development and occasional design work.
        </motion.h2>

        {/* social media icons */}
        <SocialMedia />
      </div>
    </section>
  );
};

export default Hero;
