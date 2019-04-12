import React from "react";
import "./FilterBox.css";

const StateMenu = props => {
  return (
    <select defaultValue="state" onChange={props.onChange}>
      <option value="state">State</option>
      <option value="open">Open</option>
      <option value="close">Close</option>
    </select>
  );
};

export default StateMenu;
