import React, { Component } from "react";

class SetHubname extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hubname: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Set Hub Name</h3>
        <input
          type="text"
          value={this.state.hubname}
          onChange={this.handleChange}
        />
        <button type="submit">Set</button>
      </form>
    );
  }

  handleChange(event) {
    this.setState({ hubname: event.target.value });
  }

  handleSubmit(event) {
    // send the mutation to the GraphQL server
    console.log(`Setting hub name to ${this.state.hubname}`);
    event.preventDefault();
  }
}

export default SetHubname;
