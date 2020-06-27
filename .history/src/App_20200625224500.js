import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./page/LandingPage";
import Sign from "../components/Sign";
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/sign-in" exact component={} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
