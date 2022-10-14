import Image from "next/image";

const About = () => {
  return (
    <div className="">
      <div className="max-w-7xl px-8 mx-auto pt-0 md:pt-10 pb-16 md:pb-20">
        <p className="uppercase text-blue-600 text-lg">About</p>
        <p className="mt-6 text-3xl font-medium">Who I Am</p>
        <div className="flex items-center justify-around flex-col-reverse md:flex-row">
        <div className="w-full px-2 md:max-w-2xl">
          <div className="mt-12 text-gray-600 md:text-md text-justify md:text-left">
            <p>
              I'm currently persuing MCA from University of Mumbai. I'm a
              Frontend Web Developer based in India. I specialize in building
              (and occasionally designing) exceptional websites, applications,
              and everything in between.
            </p>
            <p className="mt-6">
              I enjoy creating things that live on the internet. I'm focused on
              building responsive front-end web application while learning
              backend technologies.
            </p>
            <p className="mt-6">
              My main focus these days is building accessible, inclusive
              products and digital experiences at Kuchnaya Technolabs for a
              variety of clients.
            </p>
          </div>
        </div>
        <div className="rounded-full overflow-hidden bg-blue-50 -z-10
            mt-10 md:mt-12 md:ml-10
          ">
          <Image
            src={"/assets/images/gamerProfile.webp"}
            width={320}
            height={320}
            className="rounded-full object-contain"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
