import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./page/LandingPage";
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <div className="container">
        <LandingPage />
        <Switch>
          
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
