import Image from "next/image";

const Skills = () => {
  const skillsInfo = [
    {
      title: "HTML",
      img: "html.png",
    },
    {
      title: "CSS",
      img: "css3.png",
    },
    {
      title: "JavaScript",
      img: "javascript.png",
    },
    {
      title: "React",
      img: "react.png",
    },
    {
      title: "Gatsby",
      img: "gatsby.png",
    },
    {
      title: "Next",
      img: "next.png",
    },
    // {
    //   title: "JSX",
    //   img: "jsx.png",
    // },
    {
      title: "GraphQL",
      img: "graphql.png",
    },
    {
      title: "Solid",
      img: "solid.png",
    },
    {
      title: "Angular",
      img: "angular.png",
    },
    {
      title: "Chakra UI",
      img: "chakra.png",
    },
    // {
    //   title: "Bootstrap",
    //   img: "bootstrap.png",
    // },
    {
      title: "Tailwind",
      img: "tailwind.png",
    },
    // {
    //   title: "Figma",
    //   img: "figma.png",
    // },
    {
      title: "Node",
      img: "nodejs.png",
    },
    {
      title: "Postman",
      img: "postman.png",
    },
    {
      title: "MongoDB",
      img: "mongodb.png",
    },
    // {
    //   title: "MySQL",
    //   img: "mysql.png",
    // },
    // {
    //   title: "Firebase",
    //   img: "firebase.png",
    // },
    {
      title: "Sass",
      img: "sass.png",
    },
    {
      title: "GitHub",
      img: "github.png",
    },
    {
      title: "Vercel",
      img: "vercel.png",
    },
    // {
    //   title: "Heroku",
    //   img: "heroku.png",
    // },
    {
      title: "Netlify",
      img: "netlify.png",
    },
    // {
    //   title: "AWS",
    //   img: "amazon-aws.png",
    // },
    // {
    //   title: "Azure",
    //   img: "azure.png",
    // },
  ];

  return (
    <section id="skills" className="">
      <div className="max-w-7xl px-8 mx-auto pt-10 pb-32">
        <p className="uppercase text-blue-600 text-lg">Skills</p>
        <p className="mt-6 text-3xl font-medium max-w-fit">My Skills</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 sm:gap-4 md:gap-10 pt-14 pl-0 md:pl-6">
          {skillsInfo.map((skill,index) => (
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg" key={index}>
              <Image
                src={`/assets/images/skills/${skill.img}`}
                alt={skill.title}
                width={50}
                height={50}
                className="w-12 h-12 md:w-14 md:h-14 z-0"
              />
              <p className="mt-4 text-md md:text-lg font-medium">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
