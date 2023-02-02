import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function intro() {
  const socialMedia = [
    {
      url: "https://github.com/SolomonAvraham",
      icon: <AiFillGithub className="  hover:text-black " />,
    },
    {
      url: "mailto:solomon.avraham31@gmail.com",
      icon: <AiOutlineMail className=" hover:text-blue-900 " />,
    },
    {
      url: "https://www.linkedin.com/in/solomon-avraham-82b8a2234/",
      icon: <AiFillLinkedin className=" hover:text-blue-900 " />,
    },
  ];
  return (
    <>
      <section className="bg-gradient-to-b from-slate-400 py-52  dark:bg-gray-500">
        {/* <div className="   absolute top-0  h-fit w-full  animate-spin rounded-full  outline-dashed"></div> */}
        <div className=" relative mx-auto flex h-80 w-80 justify-center overflow-hidden rounded-full bg-gradient-to-b from-slate-400  md:h-96 md:w-96 ">
          <img
            className="absolute top-2  z-10 h-full opacity-80 drop-shadow-2xl hover:hidden   sm:hover:flex-none"
            src="me/me-1.png"
          />
          <img
            className=" absolute bottom-1 z-0 h-full opacity-70  drop-shadow-2xl sm:hidden md:block  "
            src="me/me-2.png"
          />
          <img
            className=" absolute bottom-0 -z-0 opacity-5"
            src="me/me-1.png"
          />
        </div>
        <div className="p-10 py-10 text-center">
          <h2 className="py-2 text-5xl  font-medium  dark:text-yellow-100  md:text-6xl">
            Solomon Avraham
          </h2>
          <h3 className="py-2 text-2xl  md:text-3xl">Full Stack Developer</h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 md:text-xl">
            Hello, my name is Solomon Avraham a Motivated full-stack web
            developer whose Looking for my first position as a developer. you're
            more than welcome to check out my projects.
          </p>
          <div className="flex justify-center gap-16 py-3 text-6xl text-slate-700 border-black drop-shadow-2xl dark:text-gray-400">
            {socialMedia.map((item, index) => (
              <a href={item.url} key={index} target="_blank">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
