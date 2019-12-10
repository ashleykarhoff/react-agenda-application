import React, { Component } from "react";
import Event from "../components/Event";

class Calendar extends Component {
  state = {};
  render() {
    return (
      <div>
        Calendar
        <Event />
      </div>
    );
  }
}

export default Calendar;
