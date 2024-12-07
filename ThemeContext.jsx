import React, { createContext, useState } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const Update = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, Update }}>
      {children}
    </ThemeContext.Provider>
  );
};
 