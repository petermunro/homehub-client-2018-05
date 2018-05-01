import React from "react";

const Light = props => (
  <div>
    <h3>{props.name}</h3>
    <p>{props.id}</p>
    <p>Brightness: {props.brightnessLevel}</p>
    <p>Manufacturer: {props.manufacturer}</p>
  </div>
);

export default Light;
