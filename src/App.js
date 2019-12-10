import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Homepage from "./containers/Homepage";
import AgendaForm from "./containers/AgendaForm";
import Agenda from "./containers/Agenda";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Signup path="signup" />
      <Login path="login" />
      <ErrorPage path="unknown" />
      <Homepage path="/" />
      <AgendaForm path="agenda/new" />
      <Agenda path="agenda/:id" />
    </Router>
  );
}

export default App;
