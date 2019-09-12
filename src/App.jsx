import React from "react";
import OrderList from "./OrderList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p> 4 - 7 = {4 - 7}</p>
      <OrderList listNames={["C#", "Java", "C++"]} />
      <hr />
      <OrderList listNames={["Ulf", "Erik", "Kent"]} />
    </div>
  );
}

export default App;
