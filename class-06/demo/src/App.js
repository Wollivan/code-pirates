import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  // const [stateVariable, mutationFunction] = useState(initialValue);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});

  async function getLocation() {
    const API =
      "https://eu1.locationiq.com/v1/search.php?key=" + process.env.REACT_APP_API_KEY + "&q=" + searchQuery + "&format=json";
    const res = await axios.get(API);
    setLocation(res.data[0]);
  }

  function handleType(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      <input onChange={handleType} />
      <button onClick={getLocation}>Get Location Details</button>
      <h1>The city is: {location.display_name}</h1>
    </div>
  );
}

export default App;
