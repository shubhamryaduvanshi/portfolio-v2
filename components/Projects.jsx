const Projects = () => {
  const projectsInfo = [
    {
      id: 1,
      title: "Pokedex App",
      bannerImage: "pokedex.png",
      description:
        "A Pokedex app that allows you to search for Pokemon and view their stats. Built with Next JS, Tailwind CSS, and PokeAPI.",
      gitHubLink: "https://github.com/shubhamryaduvanshi/pokedex",
      linkText: "View on Github",
      liveUrl: "https://my-pokedex-web.vercel.app/",
      projectScreenShots: [
        "pokedex-1.png",
        "pokedex-2.png",
        "pokedex-3.png",
        "pokedex-4.png",
      ],
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl px-8 mx-auto pt-10 pb-32">
        <p className="uppercase text-blue-600 text-lg">Projects</p>
        <p className="mt-6 text-3xl font-medium max-w-fit">Personal Projects</p>
        <div className="mt-10 ml-0 md:ml-8">My Projects starts here</div>
      </div>
    </div>
  );
};

export default Projects;
