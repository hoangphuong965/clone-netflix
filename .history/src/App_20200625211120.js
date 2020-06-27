import React, { Fragment } from "react";
import "./App.css";
import Hero from "./components/Navbar";
// import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Hero />
      </div>
    </Fragment>
  );
}

export default App;
