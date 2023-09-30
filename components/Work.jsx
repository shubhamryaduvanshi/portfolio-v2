import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

import parse from "html-react-parser";
const Work = () => {
  const workInfo = [
    {
      id: 1,
      designation: "Jr. Software Developer",
      company: "Kuchnaya Technolabs Pvt. Ltd.",
      duration: "May 2021 - Present",
      website: "https://kuchnaya.com/",
      jobType: "Full Time",
      work: [
        "Worked on a hunt booking web app. Primarily focused on creating reusable react components, multi-device responsiveness, partial payment feature, form validation, and SEO using <span class='highLightText'> GraphQL, Gatsby, Chakra UI,</span> and <span class='highLightText'>React Helmet.</span>",
        // "Worked on Figma plugin that generates proper JSON structure for Lottie files using React.",
        // "Worked on the home page for auropay.net using Next JS.",
        "Created reusable components and integrated stripe payment gateway for vidyback.com using <span class='highLightText'> React, Chakra UI, NodeJS </span> and <span class='highLightText'> Express. </span>",
        // "JSON driven dynamic form integration using React App.",
        " Designed and developed an <span class='highLightText'>embed-able checkout</span> widget with multiple client-side <span class='highLightText'> customizations </span>, end-to-end<span class='highLightText'> encryption</span> and validation in <span class='highLightText'> Vanilla JS </span>, similar to <span class='highLightText'> Stripe </span>elements.",
        " Developed embed-able checkout <span class='highLightText'>widget configuration </span>dashboard (where the merchant/admin can configure the form, pay button, header, footer, payment options, and theme) in the <span class='highLightText'> Angular</span> web app.",

        " Developed an embed-able <span class='highLightText'>invoice pay </span>widget with end-to-end <span class='highLightText'> encryption </span>, multiple client-side <span class='highLightText'> customizations </span> and validation using <span class='highLightText'> Solid JS </span>from POC to Production. ",

        " Developed an embed-able invoice pay widget<span class='highLightText'> configuration </span> dashboard (where the merchant/admin can configure the searchable fields, pay button, header, footer, payment options, and color scheme selector) in the <span class='highLightText'> Angular</span> web app.",
        " Developed an <span class='highLightText'>Invoice Pay</span> using Solid JS from Scratch.",
        " Worked on several other features in <span class='highLightText'>payments domain.</span>",
      ],
    },
  ];

  return (
    <section id="work" className="">
      <div className="max-w-7xl px-8 mx-auto pt-10 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="uppercase text-blue-600 text-lg"
        >
          Work
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            x: { duration: 1.5 },
            opacity: { duration: 1.5 },
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="mt-6 text-3xl font-medium max-w-fit"
        >
          Experience
        </motion.p>

        <div className="mt-10 ml-0 md:ml-8">
          {workInfo.map((work) => (
            <div className="flex items-center" key={work.id}>
              <div className="flex flex-col">
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    x: { duration: 2 },
                    opacity: { duration: 2 },
                    delay: 1,
                  }}
                  viewport={{ once: true }}
                  key={work.id}
                  className="text-xl font-medium"
                >
                  {work.designation}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    x: { duration: 2 },
                    opacity: { duration: 2 },
                    delay: 1,
                  }}
                  viewport={{ once: true }}
                  href={work.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-md text-blue-700 flex items-center mt-0.5"
                >
                  {work.company}{" "}
                  <BsBoxArrowUpRight className="ml-1 mb-2" size={12} />
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "linear",
                    x: { duration: 2 },
                    opacity: { duration: 2 },
                    delay: 1,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center mt-3"
                >
                  <p className="text-md text-gray-500">{work.duration}</p>
                  <span className="mx-2 text-gray-500">|</span>
                  <p className="text-md text-gray-500">{work.jobType}</p>
                </motion.div>

                <div className="mt-6">
                  <motion.p
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "linear",
                      x: { duration: 2 },
                      opacity: { duration: 2 },
                      delay: 1,
                    }}
                    viewport={{ once: true }}
                    className="text-md text-gray-600 font-medium"
                  >
                    The key responsibilities are as mentioned below:
                  </motion.p>
                  <div className="mt-2">
                    {work.work.map((work, index) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          ease: "linear",
                          x: { duration: 2 },
                          opacity: { duration: 2 },
                          delay: index + 0.6 + 0.4,
                        }}
                        viewport={{ once: true }}
                        key={index}
                        className="flex items-start md:items-center mt-3 text-justify md:text-left"
                      >
                        {/* <div className="w-2 h-2 bg-gray-600 rounded-full"></div> */}
                        <div className="mt-0.5 md:mt-0">{index + 1}.</div>
                        {/* <BsCircleFill
                            className="text-gray-600 w-4 h-4"
                            size={8}
                          /> */}
                        <p className="ml-3 text-gray-500">
                          {parse(work)}
                          {/* {work} */}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* worked div end */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
