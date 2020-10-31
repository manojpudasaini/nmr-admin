import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./Components/pages/movies";
import PrivateRoute from "./PrivateRoute";
import Series from "./Components/pages/series";

const App = () => {
  
  return (
    <BrowserRouter >
      <Switch >
      
        <PrivateRoute exact path="/series" component={Series} > </PrivateRoute>
        
          <PrivateRoute path="/" component={Movies} > </PrivateRoute>
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
