import React from "react";
import { Header, Footer } from "components/features/index";
import Router from "components/router/Router";
import DarkModeProvider from "components/context/darkModeContext";

export default function Template() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Router />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
