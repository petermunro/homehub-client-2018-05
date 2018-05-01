import React from "react";

const Thermostat = ({ accessory }) => (
  <div>
    <h3>{accessory.name}</h3>
    <p>{accessory.id}</p>
    <p>Temperature: {accessory.temperature}</p>
  </div>
);

export default Thermostat;
