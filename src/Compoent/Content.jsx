import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme)

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <p>Paragraf features prominently in the latest episode of CGTN Europe’s RAZOR Science Show. Featuring interviews with our Co-Founder and CSO Prof. Sir Colin Humphreys, Senior Scientist Rosie Baines and Technical Lead Martin Tyler, the show covers Paragraf’s origins at the University of Cambridge’s Cambridge Centre for Gallium Nitride, our manufacturing process and products, and the many ways that graphene is expanding what is possible in electronics and beyond.</p>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
    </div>
  );
};

export default ThemeToggleButton;