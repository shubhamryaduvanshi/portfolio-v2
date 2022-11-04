import Typewriter from "typewriter-effect";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col max-w-7xl mx-auto pt-56 md:pt-60 pb-60 justify-center items-center">
        <p className="text-xs uppercase">Let&apos;s make something great together</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-600 pt-3 md:pt-4 pb-3 md:pb-6 ">
          Hi, I&apos;m <span className="text-blue-600">Shubham</span>
        </h1>
        <div className="text-center text-2xl md:text-4xl font-semibold text-slate-500">
          {/* A Frontend Web DeveloperI build things for the web. */}

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
        </div>

        <h2 className="max-w-3xl text-justify md:text-center mt-6 md:mt-8 px-8 md:px-4 text-sm text-gray-600">
          I&apos;m a Frontend Web Developer based in India. I specialize in building
          (and occasionally designing) exceptional websites, applications, and
          everything in between.
        </h2>

        {/* social media icons */}
        <SocialMedia />
      </div>
    </div>
  );
};

export default Hero;
