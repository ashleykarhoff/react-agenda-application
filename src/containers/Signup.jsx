import React from "react";

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
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
      .then(console.log);
  };

  render() {
    return (
      <React.Fragment>
        <form action="">
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChange}
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </label>
          <label>
            Confirm password:
            <input
              type="password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.onChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Signup;
