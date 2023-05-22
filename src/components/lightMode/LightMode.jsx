import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./lightMode.css";


const LightMode = () => {
  const theme = useContext(ThemeContext);
  const lightMode = theme.state.lightMode;
  const toggleDarkMode = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="lightMode" onClick={toggleDarkMode}>
      <div
        className="btn">{lightMode ?  (<i className="fa-solid fa-sun"></i> ):( <i class="fa-solid fa-moon"></i>)}</div>
    </div>
  );
};

export default LightMode;
