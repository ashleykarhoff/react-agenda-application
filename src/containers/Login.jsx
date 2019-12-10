import React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    console.log("submit");
  };

  render() {
    return (
      <React.Fragment>
        <form>
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
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
