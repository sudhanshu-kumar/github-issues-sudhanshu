import React from "react";
import "./HeadContainer.css";
import repoIcon from "../../assests/repo.png";

const HeadContainer = props => {
  return (
    <div className="head-bar">
      <div className="title-box">
        <img src={repoIcon} alt="repo-icon" />
        <h2 className="head-1">freeCodeCamp {" "}</h2>
        <h2 className="head-slash"> / </h2>
        <h2>{" "} freeCodeCamp</h2>
      </div>
      <h5>Issues <span className="head-state">{props.dataLength}</span></h5>
    </div>
  );
};

export default HeadContainer;
