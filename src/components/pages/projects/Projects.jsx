import React from "react";
import { PropagateLoader } from "react-spinners";
export default function Projects() {
  const keysNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
      <section className=" h-full bg-gradient-to-b from-slate-400  dark:bg-gray-500">
        <h1 className=" py-10 text-center text-5xl ">Projects</h1>
        <div className="flex flex-wrap items-center justify-center gap-10 ">
          {projects.map((item) => (
            <div
              key={keysNum[0]}
              className="card h-80  w-80 flex-col items-center justify-center rounded-3xl bg-gray-400 text-center font-light shadow-2xl"
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
                  className="github bg  rounded-lg border-2  p-2   hover:bg-transparent hover:font-bold"
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
      </section>
    </>
  );
}
