import Project from "./Project";
import projectInfo from "../public/assets/json/projects.json";
import Dialog from "./Dialog";
import { useState } from "react";

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
    <div className="">
      <div className="max-w-7xl px-8 mx-auto pt-10 pb-32">
        <p className="uppercase text-blue-600 text-lg">Projects</p>
        <p className="mt-6 text-2xl sm:text-3xl font-medium max-w-fit">
          Personal Projects
        </p>
        <div className="mt-10 ml-0 md:ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-4 md:gap-6 mx-auto">
          {projectInfo.map((project) => (
            <Project
              key={project.id}
              project={project}
              showProjectDetails={showProjectDetails}
            />
          ))}
        </div>
        {showDialog && (
          <Dialog projectInfo={activeProject} closeDialog={closeDialog} />
        )}
      </div>
    </div>
  );
};

export default Projects;
