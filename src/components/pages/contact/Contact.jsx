import React from "react";

export default function Contact() {
  return (
    <>
      <section className="overflow-y-auto bg-gradient-to-t from-slate-400 dark:bg-gray-500">
        <div className=" container mx-auto h-52 text-center">
          <h3 className="py-10  text-5xl  ">Contact Me</h3>
          {/* <form className=" flex container mx-auto h-52 text-center">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required=""
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              required=""
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required=""
              spellcheck="false"
            ></textarea>
            <button type="submit">Send Message</button>
          </form> */}
        </div>
      </section>
    </>
  );
}
