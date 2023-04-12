import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  function handleMode() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className={"App " + theme}>
      <Header handleMode={handleMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
