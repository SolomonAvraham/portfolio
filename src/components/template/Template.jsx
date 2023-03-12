import React from "react";
import { Header, Footer } from "../features/index";
import DarkModeProvider from "../context/darkModeContext";
import { Contact, Intro, Projects, Skills } from "../sections/index";

export default function Template() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
