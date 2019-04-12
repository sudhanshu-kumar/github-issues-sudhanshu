import React from "react";
import "./FilterBox.css";

const OpenClose = props => {
  let openCount = 0;
  let closeCount = 0;
  props.issues.forEach(issue => {
    if (issue.state === "open") {
      openCount += 1;
    } else {
      closeCount += 1;
    }
  });
  return (
    <div className="open-close">
      <span className="open-span">{openCount} opened</span>
      <span>{closeCount} closed</span>
    </div>
  );
};

export default OpenClose;
