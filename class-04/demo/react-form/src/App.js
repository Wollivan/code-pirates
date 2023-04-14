import { useState } from "react";
import "./App.css";

function App() {
  // const [stateVariable, mutationFunction] = useState(initialValue);
  const [form, setForm] = useState({
    cake: "",
    quantity: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      <h1>React Form</h1>
      <p>Cake: {form.cake}</p>
      <p>Quantity: {form.quantity}</p>
      <form onClick={handleSubmit}>
        <label htmlFor="cake">Cake</label>
        <input name="cake" placeholder="What is your fave cake?" onChange={handleChange} />
        <label htmlFor="quantity">Quantity</label>
        <input name="quantity" placeholder="How many you want?!" onChange={handleChange} />
        <input type="submit" value="Submit this mutha!" />
      </form>
    </div>
  );
}

export default App;
