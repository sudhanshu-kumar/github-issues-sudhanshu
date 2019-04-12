import React from "react";
import "./FilterBox.css";

const SearchBox = (props) => {
  return <input type="text" placeholder="search..." onKeyPress={props.onKeyPress} />;
};

export default SearchBox;
