import Card from "../../features/card/Card";
import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Property Pro",
      img: "others/1.png",
      technology: " MongoDB, Express.js, React.js, Node.js, Typescript & Refine.",
      description:
        "The application provides information about rental and sale houses near your area, user can easily be real estate agents by registering for the application and posting their will. I used a new framework that goes by the name Refine. which comes with built-in templates.very helpful tool.",
      github: "https://github.com/SolomonAvraham/refine_dashboard",
      projectLink: "https://property-pro.netlify.app/",
    },
  ];

  return (
    <>
      <section className=" border-4 border-solid border-gray-300 bg-projects   bg-contain bg-center dark:border-gray-500">
        <div className="h-full bg-gradient-to-b py-24  text-center  dark:bg-black dark:bg-opacity-30  ">
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
