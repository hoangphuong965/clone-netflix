import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./page/LandingPage";
import {Route, Switch, Router} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/sign-in" exact com />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
