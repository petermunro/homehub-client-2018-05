import React from "react";

const Door = ({ accessory }) => (
  <div>
    <h3>{accessory.name}</h3>
    <p>{accessory.id}</p>
    <p>{accessory.isClosed ? "Closed" : "Open"}</p>
    <p>{accessory.isLocked ? "Locked" : "Unlocked"}</p>
  </div>
);

export default Door;
