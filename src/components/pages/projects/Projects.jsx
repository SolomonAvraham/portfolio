import Card from "../../features/card/Card";
import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Refine Dashboard",
      img: "others/1.png",
      technology: "Typescript, React.js, Node.js, MongoDB",
      description:
        "Refine is the process of improving and optimizing a dashboard to better meet the needs of its users. This involves analyzing user feedback and usage patterns to identify areas for improvement, as well as making changes to the layout, design, and functionality of the dashboard.",
      github: "https://github.com/SolomonAvraham/refine_dashboard",
      projectLink: "https://refine-dashboard-web.netlify.app/",
    },
  ];

  return (
    <>
      <section className=" dark: bg-projects bg-fixed bg-center">
        <div className="h-full bg-gradient-to-b   from-slate-400 to-transparent  py-24  text-center dark:bg-gradient-to-t  ">
          <h1 className="   font-one text-7xl   dark:text-yellow-100	  ">
            Projects
          </h1>
          <hr className=" mx-auto mt-4 w-52 opacity-90 " />
          <div className="flex flex-wrap items-center justify-center gap-10 py-10 ">
            {projects.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                technology={item.technology}
                img={item.img}
                description={item.description}
                github={item.github}
                projectLink={item.projectLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
