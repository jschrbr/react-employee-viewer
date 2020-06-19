import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";

import NavBar from "./components/NavBar";

function App() {
  return (
    <Fragment>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <div className="App-body">
          <Home />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
