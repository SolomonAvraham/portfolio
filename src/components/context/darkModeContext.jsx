import React, { useState, useContext, createContext } from "react";

const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={darkMode ? "dark" : ""}>{children}</div>
      </DarkModeContext.Provider>
    </>
  );
}
