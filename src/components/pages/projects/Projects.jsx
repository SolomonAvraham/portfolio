import React from "react";
import { PropagateLoader } from "react-spinners";
export default function Projects() {
  const keysNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const projects = [
    {
      name: "1",
      img: "",
      github: "",
      link: "",
    },
    {
      name: "2",
      img: "",
      github: "",
      link: "",
    },
    {
      name: "3",
      img: "",
      github: "",
      link: "",
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
              <div
                key={item.name}
                className="card h-80 w-80  flex-col items-center justify-center rounded-3xl bg-gray-400 text-center font-light shadow-2xl hover:scale-105 "
              >
                <div key={keysNum[1]} className="name py-5">
                  {item.name}
                </div>
                <hr key={keysNum[2]} className="mx-auto  w-52 opacity-30" />
                <div
                  key={keysNum[3]}
                  className="pic flex h-32 cursor-pointer flex-col items-center justify-evenly py-2"
                >
                  <PropagateLoader
                    key={keysNum[4]}
                    color="#b8bcbb"
                    size={20}
                    speedMultiplier={1}
                  />
                  <h1 key={keysNum[5]} className=" ">
                    Coming Soon!
                  </h1>
                </div>
                <hr key={keysNum[6]} className="mx-auto w-52  opacity-30" />
                <div
                  key={keysNum[7]}
                  className="links flex cursor-pointer flex-row justify-evenly py-10  "
                >
                  <div
                    key={keysNum[8]}
                    className="github bg  rounded-lg border-2  bg-slate-100  p-2  hover:bg-transparent hover:font-bold"
                  >
                    GitHub
                  </div>
                  <div
                    key={keysNum[9]}
                    className="project rounded-lg  border-2 bg-slate-100  p-2   hover:bg-transparent hover:font-bold"
                  >
                    Project
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
