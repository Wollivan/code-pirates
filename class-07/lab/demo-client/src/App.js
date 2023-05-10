import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  // const [stateVariable, mutationFunction] = useState(initialValue);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState([]);

  async function getLocation() {
    // getting location data
    const API_Location =
      "https://eu1.locationiq.com/v1/search.php?key=" + process.env.REACT_APP_API_KEY + "&q=" + searchQuery + "&format=json";
    const res_location = await axios.get(API_Location);
    setLocation(res_location.data[0]);

    // getting weather data
    const API_Weather = "http://localhost:8080/weather?searchQuery=" + searchQuery;
    const res_weather = await axios.get(API_Weather);
    setWeather(res_weather.data);
  }

  function handleType(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      <input onChange={handleType} />
      <button onClick={getLocation}>Get Location Details</button>
      <h1>The city is: {location.display_name}</h1>
      {weather.map(function (day) {
        return (
          <p>
            {day.date} - {day.description}
          </p>
        );
      })}
    </div>
  );
}

export default App;
