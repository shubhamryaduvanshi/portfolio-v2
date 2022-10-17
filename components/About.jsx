import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { GiHobbitDwelling } from "react-icons/gi";

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
      text: "Coding, Sketching",
    },
  ];

  return (
    <>
      <section id="about">
        <div className="max-w-7xl px-8 mx-auto pt-0 md:pt-10 pb-16 md:pb-20">
          <p className="uppercase text-blue-600 text-lg">About</p>
          <p className="mt-6 text-3xl font-medium">Who I Am</p>
          <div className="flex items-center justify-around flex-col-reverse md:flex-row">
            <div className="w-full px-2 md:max-w-2xl">
              <div className="mt-12 text-gray-600 md:text-md text-justify md:text-left">
                {/* <p>
                  I&apos;m currently persuing MCA from University of Mumbai.
                  I&apos;m a Frontend Web Developer based in India. I specialize
                  in building (and occasionally designing) exceptional websites,
                  applications, and everything in between.
                </p> */}
                <p className="mt-6">
                  I enjoy creating things that live on the internet. I&apos;m
                  focused on building responsive front-end web application while
                  learning backend technologies.
                </p>
                <p className="mt-6">
                  My main focus these days is building accessible, inclusive
                  products and digital experiences at Kuchnaya Technolabs for a
                  variety of clients.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:grid-cols-3">
                  {aboutGrid.map((item) => (
                    <div key={item.id} className="flex items-center mt-4 md:mt-6">
                      <div className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-blue-300 rounded-full">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-md font-medium">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="rounded-full overflow-hidden bg-blue-100 z-0
            mt-10 md:mt-12 md:ml-10 p-2 flex shadow-lg items-center justify-center"
            >
              <Image
                // src={"/assets/images/gamerProfile.webp"}
                src={"/myProfile.png"}
                alt="Profile Picture"
                width={320}
                height={320}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
