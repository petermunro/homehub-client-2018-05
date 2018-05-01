import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// Hubname component using <Query /> components

const HubnameQuery = gql`
  {
    system {
      hubname
    }
  }
`;

const Hubname = () => (
  <Query query={HubnameQuery}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error: ${error.message}`;

      return <div>Hubname: {data.system && data.system.hubname}</div>;
    }}
  </Query>
);

export default Hubname;
