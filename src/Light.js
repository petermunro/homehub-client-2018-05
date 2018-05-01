import React from "react";

const Light = ({ accessory }) => (
  <div>
    <h3>{accessory.name}</h3>
    <p>{accessory.id}</p>
    <p>Brightness: {accessory.brightnessLevel}</p>
    <p>Manufacturer: {accessory.manufacturer}</p>
  </div>
);

export default Light;
