import React from "react";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

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
    {
      url: "https://wa.me/972549727138",
      icon: <AiOutlineWhatsApp className=" hover:text-green-500 " />,
    },
  ];
  return (
    <>
      <section className=" relative  bg-gradient-to-b from-slate-400 py-52  dark:bg-gray-500">
        <img
          src="me/me-1-bg.jpg"
          alt="me-bg"
          className=" absolute top-0 z-0 opacity-5"
        />
        <div className=" relative mx-auto flex h-80 w-80 justify-center overflow-hidden rounded-full bg-gradient-to-b from-slate-400  md:h-96 md:w-96 ">
          <img
            className=" mt-5   h-full opacity-70 drop-shadow-2xl dark:hidden  "
            src="me/me-1.png"
            alt="me-1"
          />
          <img
            className="hidden    opacity-70  drop-shadow-2xl dark:block "
            src="me/me-2.png"
            alt="me-2"
          />
          <img
            className=" absolute bottom-0 left-10 -z-0 opacity-5 dark:hidden"
            src="me/me-1.png"
            alt="me-1"
          />
          <img
            className=" absolute bottom-3 right-10 -z-0 hidden opacity-5 dark:block"
            src="me/me-2.png"
            alt="me-1"
          />
        </div>
        <div className="p-10 py-10 text-center">
          <h2 className="py-2 font-one text-5xl  dark:text-yellow-100  md:text-6xl">
            Solomon Avraham
          </h2>
          <hr className=" mx-auto  w-52 opacity-50" />

          <h3 className="py-2 font-one text-2xl dark:text-slate-100 md:text-3xl">
            Full Stack Developer
          </h3>
          <p className="text-md mx-auto max-w-xl py-5 font-two leading-8 text-gray-800 dark:text-yellow-100  md:text-xl  ">
            Hello, my name is Solomon Avraham a Motivated full-stack web
            developer whose Looking for my first position as a developer. you're
            more than welcome to check out my projects.
          </p>
          <div className=" mx-auto flex max-w-lg  justify-center gap-10 rounded-3xl border-black bg-slate-200 bg-opacity-75 py-3 text-4xl text-slate-700 drop-shadow-2xl hover:drop-shadow-2xl dark:bg-opacity-10 dark:text-gray-200">
            {socialMedia.map((item, index) => (
              <a
                className=" hover:scale-125"
                href={item.url}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
