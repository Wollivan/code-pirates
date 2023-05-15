import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [cats, setCats] = useState([]);
  const [form, setForm] = useState({
    name: "",
    colour: "",
    hasClaws: true,
    location: "",
  });

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

  async function handleSubmit(event) {
    event.preventDefault();

    const API = "http://localhost:8080/cats";
    await axios.post(API, form);
    getCats();
    setForm({
      name: "",
      colour: "",
      hasClaws: true,
      location: "",
    });
  }

  function handleChange(event) {
    // Tim to go throught this at some point...
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      <h1>Cats Stuff</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} value={form.name} placeholder="Cat Name" />
        <input name="colour" onChange={handleChange} value={form.colour} placeholder="Cat Colour" />
        <input name="location" onChange={handleChange} value={form.location} placeholder="Cat Location" />
        <input type="submit" />
      </form>
      <br />
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
