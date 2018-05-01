import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SetHubnameMutation = gql`
  mutation SetHubname($newHubname: String!) {
    setHubname(name: $newHubname) {
      hubname
    }
  }
`;

const GetHubnameQuery = gql`
  query getHubname {
    system {
      hubname
    }
  }
`;

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

    this.props
      .mutate({
        variables: { newHubname: this.state.hubname },
        update: (proxy, { data: { setHubname } }) => {
          const cachedData = proxy.readQuery({ query: GetHubnameQuery });
          cachedData.system.hubname = setHubname.hubname;
          proxy.writeQuery({ query: GetHubnameQuery, data: cachedData });
        }
      })
      .then(({ data }) => {
        console.log("received data:", data);
      })
      .catch(error => {
        console.log(`Error:`, error);
      });
  }
}

export default graphql(SetHubnameMutation)(SetHubname);
