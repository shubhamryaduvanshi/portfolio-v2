import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChrome } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Dialog = ({ projectInfo, closeDialog }) => {
  return (
    <div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-3 sm:pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                  <div className="flex justify-between border-b-2 border-gray-200 pb-2">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900 "
                      id="modal-headline"
                    >
                      {projectInfo.title}
                    </h3>
                    <button
                      onClick={closeDialog}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <AiOutlineCloseCircle size={28} />
                    </button>
                  </div>
                  <div className="mt-4">
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      autoPlay={true}
                      infiniteLoop={true}
                      interval={3000}
                      transitionTime={1000}
                      stopOnHover={false}
                      showArrows={true}
                    >
                      {projectInfo?.projectScreenShots.map((image, index) => (
                        <div key={index}>
                          <Image
                            src={`/assets/images/projects/${image}`}
                            width={300}
                            height={250}
                            objectFit="contain"
                          />
                        </div>
                      ))}
                    </Carousel>

                    <p className="text-sm mt-6 text-gray-500">
                      <span className="font-medium text-slate-600">
                        About :{" "}
                      </span>
                      {projectInfo.description}
                    </p>

                    <div className="mt-4">
                      <p className="text-sm md:text-md"> Technologies Used:</p>
                      <div className="mt-2 flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-3 px-12">
                        {projectInfo.techStack.map((tech, index) => (
                          <span
                            className="ml-2 text-sm text-slate-600 text-center bg-blue-100 rounded-sm px-3 py-1 font-light w-full md:w-auto"
                            key={index}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center mt-12  mb-4 sm:mb-6 gap-3 text-sm">
                        <a
                          href={projectInfo.liveUrl}
                          target="_blank"
                          className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-1 px-2 rounded flex items-center justify-center gap-2"
                        >
                          <FaChrome />
                          View Live
                        </a>
                        {/* create a button to view the live project */}
                        <a
                          href={projectInfo.gitHubLink}
                          target="_blank"
                          className="bg-slate-700 hover:bg-black cursor-pointer text-white py-1 px-2 rounded flex items-center justify-center gap-2"
                        >
                          <BsGithub />
                          View Code
                        </a>
                        {/* create a button to view the code */}
                      </div>
                    </div>
                  </div>

                  {/* <div
                    className="mt-2 ml-auto rounded-md cursor-pointer text-sm bg-gray-400 w-16 px-3 py-1"
                    onClick={closeDialog}
                  >
                    Close
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
