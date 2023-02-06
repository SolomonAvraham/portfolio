import React from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useDarkMode } from "components/context/darkModeContext";
export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 flex items-center justify-between py-4 px-7">
      <h1 className="text-xl font-thin dark:text-yellow-100">Hire Me</h1>
      <ul className="flex items-center">
        <li>
          {!darkMode ? (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" h-12 w-12 cursor-pointer rounded-full bg-slate-500 py-3 text-2xl hover:bg-amber-200 "
            />
          ) : (
            <BsSunFill
              onClick={() => setDarkMode(!darkMode)}
              className=" h-12 w-12 cursor-pointer rounded-full bg-amber-200 py-3 text-2xl hover:bg-slate-500"
            />
          )}
        </li>
        <li>
          <a
            className="  ml-8  rounded-md  bg-gradient-to-t from-slate-500 to-slate-600 px-4 py-2 font-thin text-white dark:text-yellow-100"
            href="https://docs.google.com/document/d/e/2PACX-1vQ_gVjoWG5c5VFFRKeqdytnyJ2REJHP9Nazi0b2NAdZUjs4bMPGDXqCrmwC-gLP6YbpAbk8Mrdrp8bi/pub"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
