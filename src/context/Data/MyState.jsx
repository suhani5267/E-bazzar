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
  const [loading, setLoading] = useState(false);
  return (
    <MyContext.Provider value={{ mode, toggleBtn, loading, setLoading }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
