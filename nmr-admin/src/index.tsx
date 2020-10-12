import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch } from "react-router-dom";
import Movies from "./Components/pages/movies";
import PrivateRoute from "./PrivateRoute";
import Series from "./Components/pages/series";
import Inputfield from './Components/Atoms/Input/index';
ReactDOM.render(
<Inputfield type="text"/>
,
  document.getElementById("root")
);

serviceWorker.unregister();
{/* <BrowserRouter>
<Switch>
  <PrivateRoute exact  path="/series" component={Series}></PrivateRoute>
  <PrivateRoute  path="/" component={Movies}></PrivateRoute>
</Switch>
</BrowserRouter> */}