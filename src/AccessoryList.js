import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Accessory from "./Accessory";
import Light from "./Light";

class AccessoryList extends Component {
  render() {
    const accessories = this.props.data.accessories || [];
    const accessoryList = accessories.map(accessory => {
      if (accessory.__typename === "Light") {
        return (
          <Light
            id={accessory.id}
            name={accessory.name}
            key={accessory.id}
            brightness={accessory.brightnessLevel}
            manufacturer={accessory.manufacturer}
          />
        );
      } else {
        return (
          <Accessory
            id={accessory.id}
            name={accessory.name}
            key={accessory.id}
          />
        );
      }
    });
    return (
      <div>
        <h2>Accessories</h2>
        {accessoryList}
      </div>
    );
  }
}

const AccessoryListQuery = gql`
  {
    accessories(offset: 0, limit: 5) {
      id
      name

      ... on Light {
        brightnessLevel
        manufacturer
      }
    }
  }
`;

export default graphql(AccessoryListQuery)(AccessoryList);
