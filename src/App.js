import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import OurHistory from "./pages/our-history/our-history";

function App() {
  return (
    <div className="App">
      <Router style={{ height: "100%" }}>
        <Header />
        <Switch className="switch-wrapper">
          <Route className="switch-wrapper" path="/home">
            <Home />
          </Route>
          <Route className="switch-wrapper" path="/our-story">
            <OurHistory />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
