import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
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
    { name: "Git", img: "icons/Git.svg" },
    { name: "GitHub", img: "icons/github.png" },
  ];
  const stackCircular = [
    {
      no: 1,
      name: "Front-end",
      value: 90,
      text: "82%",
    },
    {
      no: 2,
      name: "Web Dev",
      value: 80,
      text: "84%",
    },
    {
      no: 3,
      name: "Back-end",
      value: 85,
      text: "79%",
    },
  ];
  return (
    <>
      <section className=" relative  bg-me-two  bg-cover bg-fixed ">
             {/* <button className=" absolute top-0   right-10   ">
          <BsFillArrowUpCircleFill />
        </button> */}
        <div className=" h-full bg-gradient-to-b from-gray-300 py-24 dark:bg-black dark:bg-opacity-50 ">
     
          <h3 className=" text-center    font-one text-7xl dark:text-yellow-100">
            My Skills
          </h3>
          <hr className=" mx-auto mt-4 w-52 opacity-50 " />
          <div className="   md:flex ">
            {stackCircular.map((item, index) => (
              <div key={item.no} className=" mx-auto   w-28  py-5">
                <h1 className="py-5 text-center font-thin" key={item.name}>
                  {item.name}
                </h1>
                <CircularProgressbar
                  key={index}
                  value={item.value}
                  text={item.text}
                  styles={buildStyles({
                    textSize: "150%",
                    textColor: "#fff",
                    trailColor: "rgba(60, 60, 60,0.1)",
                    backgroundColor: "rgb(60, 60, 60)",
                  })}
                />
              </div>
            ))}
          </div>
          <div className="  mx-auto grid max-w-2xl grid-cols-5 grid-rows-2 gap-5 p-5  text-center    ">
            {stackArray.map((item, index) => (
              <div className="  text-1xl   font-medium " key={index}>
                <h3
                  className="animate-bounce py-5 sm:hidden md:block  "
                  key={item.name}
                >
                  {item.name}
                </h3>
                <img
                  className=" animate-bounce drop-shadow-xl hover:drop-shadow-2xl"
                  src={item.img}
                  alt={item.name}
                  key={item.img}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
