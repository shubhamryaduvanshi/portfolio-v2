import Project from "./Project";
import projectInfo from "../public/assets/json/projects.json";
import Dialog from "./Dialog";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const showProjectDetails = (projectId) => {
    const projectDetails = getProjectDetails(projectId);
    setActiveProject(projectDetails);
    setShowDialog(true);
  };

  const getProjectDetails = (projectId) => {
    return projectInfo.find((project) => project.id === projectId);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <section id="projects">
      <div className="max-w-7xl px-8 mx-auto pt-10 pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="uppercase text-blue-600 text-lg dark:text-blue-300"
        >
          Projects
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            x: { duration: 1.5 },
            opacity: { duration: 1.5 },
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-6 text-2xl sm:text-3xl font-medium max-w-fit dark:text-slate-400"
        >
          Personal Projects
        </motion.p>
        <div className="mt-10 ml-0 md:ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 md:gap-6 mx-auto">
          {projectInfo
            .filter((project) => project.isActive)
            .map((project) => (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "linear",
                  x: { duration: 2 },
                  opacity: { duration: 2 },
                  delay: project.id / 2 - 0.3,
                }}
                viewport={{ once: true }}
                key={project.id}
              >
                <Project
                  key={project.id}
                  project={project}
                  showProjectDetails={showProjectDetails}
                />
              </motion.div>
            ))}
        </div>
        {showDialog && (
          <Dialog projectInfo={activeProject} closeDialog={closeDialog} />
        )}
      </div>
    </section>
  );
};

export default Projects;
