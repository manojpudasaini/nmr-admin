import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Movies from "./Components/pages/project";
import PrivateRoute from "./PrivateRoute";
import Series from "./Components/pages/series";
import Test from "./page";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact  path="/series" component={Movies}></PrivateRoute>
      <PrivateRoute  path="/" component={Test}></PrivateRoute>
    </Switch>
  </BrowserRouter>,
 document.getElementById("root")
);
