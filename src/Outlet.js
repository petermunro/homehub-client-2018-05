import React from "react";

const Outlet = ({ accessory }) => (
  <div>
    <h3>{accessory.name}</h3>
    <p>{accessory.id}</p>
    <p>{accessory.isOn ? "On" : "Off"}</p>
  </div>
);

export default Outlet;
