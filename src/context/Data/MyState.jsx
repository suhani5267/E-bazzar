import React, { useState } from "react";
import MyContext from "./Context";

function MyState({ children }) {
  const [mode, setmode] = useState("light");
  const toggleBtn = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
      document.body.style.color = "#fff";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#000";
    }
  };
  return (
    <MyContext.Provider value={{ mode, toggleBtn }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
