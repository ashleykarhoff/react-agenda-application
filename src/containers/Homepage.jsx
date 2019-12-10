import React, { Component } from "react";
import Calendar from "./Calendar";
import Agendas from "./Agendas";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage-container">
        <Calendar />
        <Agendas />
      </div>
    );
  }
}

export default Homepage;
