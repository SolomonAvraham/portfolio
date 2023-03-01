import React from "react";

const Card = ({ name, img, github, projectLink, description, technology }) => {
  return (
    <>
      <div className="card  w-80  flex-col items-center justify-center rounded-3xl bg-gray-400 text-center font-light shadow-2xl hover:scale-105 ">
        <div className=" py-3  font-two text-3xl dark:text-gray-100  text-neutral-800">
          {name}
        </div>
        <div className=" mb-5  font-two dark:text-gray-100   text-neutral-800">
          <h1 className=" font-one text-2xl underline">Technology </h1>
          {technology}
        </div>
        <div className="  flex  justify-evenly  ">
          <img src={img} alt="project image" className="  w-72" />
        </div>
        <div className=" p-3  font-two text-lg dark:text-gray-100  text-neutral-800">
          <h1 className=" font-one text-2xl underline">Description </h1>{" "}
          {description}
        </div>
        <hr className="mx-auto w-52  opacity-30" />
        <div className="links flex cursor-pointer flex-row justify-evenly py-5  ">
          <div className="github bg  rounded-lg border-2  bg-slate-100  p-2  hover:bg-transparent hover:font-bold">
            <a target="_blank" rel="noreferrer" href={github}>
              GitHub
            </a>
          </div>
          <div className="project rounded-lg  border-2 bg-slate-100  p-2   hover:bg-transparent hover:font-bold">
            <a target="_blank" rel="noreferrer" href={projectLink}>
              Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
