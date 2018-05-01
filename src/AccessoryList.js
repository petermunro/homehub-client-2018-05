import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Accessory from "./Accessory";
import Light from "./Light";
import Outlet from "./Outlet";
import Door from "./Door";
import Thermostat from "./Thermostat";

const accessoryMap = new Map();
accessoryMap.set("Light", Light);
accessoryMap.set("Outlet", Outlet);
accessoryMap.set("Door", Door);
accessoryMap.set("Thermostat", Thermostat);

class AccessoryList extends Component {
  render() {
    const accessories = this.props.data.accessories || [];
    const accessoryList = accessories.map(accessory => {
      const TheAccessory = accessoryMap.get(accessory.__typename) || Accessory;
      return <TheAccessory accessory={accessory} key={accessory.id} />;
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

      ... on Outlet {
        isOn
      }
      ... on Thermostat {
        temperature
      }
      ... on Door {
        isClosed
        isLocked
      }
    }
  }
`;

export default graphql(AccessoryListQuery)(AccessoryList);
