import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
// import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <div className="container">
        <NavBar />
      </div>
    </Fragment>
  );
}

export default App;
