import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Hubname extends Component {
  render() {
    let system = this.props.data.system;
    return <div>Hubname: {system && system.hubname}</div>;
  }
}

const HubnameQuery = gql`
  {
    system {
      hubname
    }
  }
`;

export default graphql(HubnameQuery)(Hubname);
