import React from "react";
import {
  Contact,
  Intro,
  PageNotFound,
  Projects,
  Skills,
} from "components/pages/index";

export default function Router() {
  return (
    <>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
