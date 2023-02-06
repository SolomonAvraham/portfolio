import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [msg, setMsg] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("1111", "2222", form.current, "luLzakk9OdMNDVD6U");
    form.current.reset();
    setMsg(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setMsg(false);
    }, 1000);
  }, [msg]);

  return (
    <>
      <section className=" h-screen  bg-gradient-to-t from-slate-400 py-16 dark:bg-gray-500">
        <h3 className="text-center font-one  text-5xl dark:text-yellow-100 ">
         Contact me
        </h3>
        <hr className=" mx-auto mt-2  w-52    opacity-50" />

        <div className=" relative  flex items-center py-10  ">
          {msg && (
            <div className="absolute left-0  right-0 z-10 m-auto flex h-28 w-52 flex-col justify-center rounded-xl bg-zinc-300 bg-opacity-95 text-center dark:bg-slate-500">
              <span className=" text-6xl">🙏🏾</span>
              <h1>Thanks!</h1>
            </div>
          )}
          <form
            className=" mx-auto flex max-w-xs flex-col gap-10"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              placeholder="Full Name"
              type="text"
              name="user_name"
              required
              className="  p-1 opacity-70 outline-dotted"
            />
            <input
              className="  p-1 opacity-70 outline-dotted"
              placeholder="Email"
              type="email"
              name="user_email"
              required
            />
            <textarea
              placeholder="What's on your mind..."
              name="message"
              required
              cols="30"
              rows="6"
              className="  p-1 opacity-70 outline-dotted"
            />
            <button
              className=" rounded-xl bg-slate-300  py-2  text-lg font-semibold font-two hover:bg-yellow-200 "
              type="submit"
            >
              SEND
            </button>
          </form>
          <img
            className=" w-6/12 p-4 opacity-70 dark:opacity-95  sm:hidden md:block  "
            src="others/fsd.gif"
            alt="me-1"
          />
        </div>
      </section>
    </>
  );
}
