import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import About from "../src/components/Aboutus";
import Sunsigns from "../src/components/Sunsign";
import Blog from "../src/components/Blog"
function App(props) {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/sunsign/:id' component={Sunsigns} />
        <Route exact path='/blog>' component ={Blog}/>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
