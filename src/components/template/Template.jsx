import React, { lazy, Suspense } from "react";
import { Header, Footer } from "../features/index";
import DarkModeProvider from "../context/darkModeContext";
import { Contact, Intro, Projects, Skills } from "../pages/index";
import { PropagateLoader } from "react-spinners";
const Home = lazy(() => import("../pages/intro/Intro"));

export default function Template() {
  return (
    <>
      <DarkModeProvider>
        <Suspense fallback="LOADING...">
          <Header />
          {/* <Intro /> */}
          <Home />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </DarkModeProvider>
    </>
  );
}
