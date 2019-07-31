import React from "react";
import {
  Route, BrowserRouter as Router
} from "react-router-dom";

import MovieDetail from "./components/MovieDetail";
import PersonDetail from "./components/PersonDetail";
import App from "./App";

const Routes = () => (
  <Router>
    <Route exact path="/" component = {App} />
    <Route path="/movieId" component = {MovieDetail}/>
    <Route path="/castId" component = {PersonDetail}/>
  </Router>
);

export default Routes;
