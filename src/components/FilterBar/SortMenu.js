import React from "react";
import "./FilterBox.css";

const SortMenu = props => {
  return (
    <select defaultValue="sortBy" onChange={props.onChange}>
      <option value="sortBy">Sort By</option>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="recently updated">Recently Updated</option>
      <option value="least recently updated">Least Recently Updated</option>
    </select>
  );
};

export default SortMenu;
