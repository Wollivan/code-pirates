import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [theme, setTheme] = useState("dark");

  function handleMode() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className={`App`}>
      <Header handleMode={handleMode} />
      <Main theme={theme} />
    </div>
  );
}

export default App;
