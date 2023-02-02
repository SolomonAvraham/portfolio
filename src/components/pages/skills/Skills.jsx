import React from "react";

export default function Skills() {
  const stackArray = [
    { name: "HTML", img: "icons/html-5.png" },
    { name: "CSS", img: "icons/css-3.png" },
    { name: "JavaScript", img: "icons/js.png" },
    { name: "REACT", img: "icons/science.png" },
    { name: "TypeScript", img: "icons/typescript.png" },
    { name: "Redux", img: "icons/redux.svg" },
    { name: "Node.js", img: "icons/node-js.png" },
    { name: "Express.js", img: "icons/Express-js.png" },
    { name: "MongoDB", img: "icons/MongoDB.png" },
    { name: "GitHub", img: "icons/github.png" },
  ];
  return (
    <>
      <section className=" relative h-96 bg-slate-200 dark:bg-slate-600">
        <h3 className="mb-5 py-5 text-center text-5xl">My Skills</h3>
        {/* <div className="container absolute top-0  z-0 mx-auto  grid    max-w-xl grid-cols-6  place-items-center items-center  gap-5 opacity-75">
          {stackArray.map((item, index) => (
            <div className="    " key={index}>
              <img
                className=" duration-200 delay-75 animate-spin drop-shadow-xl transition hover:drop-shadow-2xl"
                src={item.img}
                alt={item.name}
                key={item.img}
              />
            </div>
          ))}
        </div> */}
        <div className="  mx-auto grid max-w-2xl grid-cols-5 grid-rows-2 gap-5 p-5  text-center    ">
          {stackArray.map((item, index) => (
            <div className="  text-1xl py-1 font-medium " key={index}>
              {/* <h3 className=" " key={item.name}>
                {item.name}
              </h3> */}
              <img
                className=" animate-bounce drop-shadow-xl hover:drop-shadow-2xl"
                src={item.img}
                alt={item.name}
                key={item.img}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
