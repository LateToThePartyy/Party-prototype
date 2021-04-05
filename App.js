import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/Schedule";
import rtMap from "./pages/rtMap";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={rtMap} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
