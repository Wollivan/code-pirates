import "./App.css";
import Paul from "./Paul.jpeg";
import { useState } from "react";

function App() {
  //    [statevarable, mutationFunction] = useState(initialValue)
  const [pats, setPats] = useState(0);

  function handlePat() {
    setPats(pats + 1);
  }

  return (
    <div className="App">
      <img onClick={handlePat} src={Paul} alt="" />
      <p>Pats on Pauls Poor Head: {pats}</p>
    </div>
  );
}

export default App;
