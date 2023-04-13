import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [modalShow, setModalShow] = useState(false);
  // const [modalData, setModalData] = useState({})

  function handleModal() {
    setModalShow(!modalShow);
  }

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
      <Main handleModal={handleModal} />
      <Footer />
      {modalShow && <Modal handleModal={handleModal} />}
    </div>
  );
}

export default App;
