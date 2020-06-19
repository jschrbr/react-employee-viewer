import React from "react";
import "./App.css";

import Home from "./pages/home";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="App-body">
        <Home />
      </div>
    </div>
  );
}

export default App;
