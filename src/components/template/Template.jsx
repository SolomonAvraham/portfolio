import React from "react";
import { Header, Footer } from "components/features/index";
import DarkModeProvider from "components/context/darkModeContext";
import { Contact, Intro, Projects, Skills } from "components/pages/index";
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
