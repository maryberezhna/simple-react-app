import "./App.css";
import React, { useState } from "react";

function App() {
  let [city, setCity] = useState(" ");

  function submitForm(event) {
    event.preventDefault();
    let message = document.querySelector("h4");
    message.innerHTML = `It is ${Math.floor(Math.random() * 11)} °C in ${city}`;
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <h3>Weather Search Engine</h3>
      <form onSubmit={submitForm}>
        <input
          type="search"
          placeholder="Search city"
          onChange={changeCity}
        ></input>
        <input type="submit" placeholder="Search city"></input>
      </form>
      <h4 id="search-message"></h4>
      <p>
        The forecast build on random data <br />
        <a href="https://github.com/maryberezhna" target="_blank">
          Mary Berezhna Github{" "}
        </a>
      </p>
    </div>
  );
}

export default App;
