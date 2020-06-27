import React, { Fragment } from "react";
import "./App.css";
import Hero from "./components/Hero";
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
