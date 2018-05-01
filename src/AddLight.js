import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const AddLightMutation = gql`
  mutation AddLight($theLight: LightInput!) {
    addLight(light: $theLight) {
      id
      name
      brightnessLevel
      manufacturer
    }
  }
`;

const GetAccessoriesQuery = gql`
  query GetAccessories {
    accessories(offset: 0, limit: 5) {
      id
      name
    }
  }
`;

class AddLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      manufacturer: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Light</h3>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input
            type="text"
            id="manufacturer"
            value={this.state.manufacturer}
            onChange={this.handleChange}
          />
        </p>
        <button type="submit">Set</button>
      </form>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    // send the mutation to the GraphQL server
    console.log(
      `Adding new Light (${this.state.name}, ${this.state.manufacturer})`
    );
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          theLight: {
            name: this.state.name,
            manufacturer: this.state.manufacturer
          }
        },
        update: (proxy, { data: { addLight } }) => {
          const cachedData = proxy.readQuery({ query: GetAccessoriesQuery });
          cachedData.accessories.push(addLight);
          proxy.writeQuery({ query: GetAccessoriesQuery, data: cachedData });
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

export default graphql(AddLightMutation)(AddLight);
