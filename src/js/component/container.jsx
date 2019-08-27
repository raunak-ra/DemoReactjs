import React, { Component } from "react";
import Dashboard from "./dashboard.jsx";
import Navigation from "./navigation.jsx";
class Container extends Component {
  render() {
    return (
      <div className="container">
       
      <Dashboard />
      <Navigation />
      </div>
    );
  }
}

export default Container;
