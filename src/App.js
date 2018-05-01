import React, { Component } from "react";
import "./App.css";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Hubname from "./Hubname2";
import SetHubname from "./SetHubname";
import AccessoryList from "./AccessoryList";
import AddLight from "./AddLight";

class App extends Component {
  render() {
    let system = this.props.data.system;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HomeHub</h1>
          <p className="loading">{this.props.data.loading && "Loading..."}</p>
        </header>
        <Hubname />
        <SetHubname />
        <AddLight />
        <p className="App-intro">
          Uptime: <span>{system && system.uptime}</span>
        </p>
        <AccessoryList />
      </div>
    );
  }
}

const MyQuery = gql`
  query MyQuery {
    system {
      uptime
    }
  }
`;

const MyAppWithData = graphql(MyQuery)(App);
export default MyAppWithData;
