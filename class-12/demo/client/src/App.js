import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [cats, setCats] = useState([]);

  async function getCats() {
    const API = "http://localhost:8080/cats";
    const res = await axios.get(API);
    setCats(res.data);
  }

  async function deleteCat(id) {
    const API = "http://localhost:8080/cats/" + id;
    await axios.delete(API);
    getCats();
  }

  return (
    <div className="App">
      <h1>Cats Stuff</h1>
      <button onClick={getCats}>Get Cats</button>
      {cats.map(function (cat) {
        return (
          <div>
            <h2>{cat.name}</h2>
            <p>{cat.colour}</p>
            <p>{cat.location}</p>
            <p>{cat._id}</p>
            <p onClick={() => deleteCat(cat._id)}>X</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
