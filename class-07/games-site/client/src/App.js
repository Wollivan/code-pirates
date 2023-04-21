import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  async function getGames() {
    const API = "http://localhost:8080/games";
    const res = await axios.get(API);
    setGames(res.data);
  }

  return (
    <div className="App">
      <button onClick={getGames}>GET THE GAMES!</button>
      {games.map(function (game, index) {
        return (
          <div key={index}>
            <h2>{game.name}</h2>
            <h3>Realeased: {game.year}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
