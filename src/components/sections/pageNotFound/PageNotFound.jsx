import React from "react";
import { Link } from "react-router-dom";


export default function PageNotFound() {
  return (
    <>
      <div className=" relative ">
        <div className=" font-semibold hover:bg-green-500 absolute top-72 left-0  right-0 z-10 m-auto flex h-16 w-32 flex-col justify-center rounded-xl bg-zinc-300 bg-opacity-95 text-center ">
          <Link to="/">Return Home!</Link>
        </div>
 
        <img src="others/404.gif" alt="404" className="sm: h-screen w-screen " />
      </div>
    </>
  );
}
