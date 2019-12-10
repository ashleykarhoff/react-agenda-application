import React, { Component } from "react";
import Calendar from "./Calendar";
import Agendas from "./Agendas";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        Homepage
        <Calendar />
        <Agendas />
      </div>
    );
  }
}

export default Homepage;
