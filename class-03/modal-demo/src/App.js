import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <h1>This is my modal website</h1>
      <button onClick={handleModal}>Set modal to Tim</button>
      <button onClick={handleModal}>Set m,odal to Josh</button>
      {showModal && <Modal handleModal={handleModal} />}
    </div>
  );
}

export default App;
