import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Project = ({ project, showProjectDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="flex w-60 h-60 mx-auto"
      >
        <div
          className={`h-full w-full overflow-hidden transition delay-50 relative rounded-md p-2 ${
            isHovered ? "border border-blue-400" : "border"
          } `}
        >
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: "linear",
                y: { duration: 1 },
                opacity: { duration: 2 },
              }}
              hidden={!isHovered}
              style={{ background: "rgba(0,0,0,0.7)" }}
              className="absolute bottom-0 left-0 z-10 w-full h-28 rounded-md transition-all duration-500 ease-in-out flex justify-center items-center flex-col"
            >
              <div className="mb-4 text-md font-semibold text-white">
                {project.title}
              </div>
              <button
                className=" px-4 mb-3 py-1 bg-blue-500 rounded-md text-white"
                onClick={() => showProjectDetails(project.id)}
              >
                View Details
              </button>
            </motion.div>
            // <div className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-300 ease-in-out bg-blend-overlay bg-blue-200 opacity-60 flex justify-center items-center">
            //   <button className="z-20 px-4 bg-blue-800 opacity-100">
            //     More Info
            //   </button>
            // </div>
          )}
          <Image
            src={project.bannerImage}
            alt={project.title}
            height={250}
            width={250}
            objectFit="cover"
            priority={false}
            style={{ borderRadius: "4px" }}
            className={`${
              isHovered
                ? "scale-110 transition-all duration-300 ease-in-out"
                : "scale-100"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
