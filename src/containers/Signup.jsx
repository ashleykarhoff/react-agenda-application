import React from "react";

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    redirect: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(resp => resp.json())
      .then(json => this.setState({ redirect: json.redirect }));
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="Email address"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Signup;
