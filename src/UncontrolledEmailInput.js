import React, { Component } from "react";

// This is an example of an "uncontrolled" component.
// We call it this because the component manages its own "draft" state.
export default class UncontrolledEmailInput extends Component {
  // Default the "draft" email to the value passed in via props.
  state = {
    email: this.props.defaultEmail
  };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <label>
        Email: <input onChange={this.handleChange} value={this.state.email} />
      </label>
    );
  }
}
