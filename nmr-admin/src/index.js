import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from './Components/Organism/Layout/Layout';

import Movies from './Components/pages/movies';
import PrivateRoute from './PrivateRoute';
import Series from './Components/pages/series';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/series" component={Series} ></PrivateRoute>
      <PrivateRoute exact path="/movie" component={Movies}></PrivateRoute>
    </Switch>
  </BrowserRouter>
,
  document.getElementById('root')
);


serviceWorker.unregister();

