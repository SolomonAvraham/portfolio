import React from "react";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {
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
    <footer id="footer" className="   bottom-2 bg-gradient-to-b from-slate-400 to-slate-100 py-5  dark:bg-gradient-to-t">
      <div className="flex flex-col items-center justify-center gap-3 py-5">
        <div className="flex ">
          {socialMedia.map((item, index) => (
            <a
              className=" m-3 text-5xl hover:scale-125"
              href={item.url}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <hr className=" mx-auto   w-72 opacity-70" />
        <h1 className=" font-two">©2023 Solomon.Portfolio</h1>
      </div>
    </footer>
  );
}
