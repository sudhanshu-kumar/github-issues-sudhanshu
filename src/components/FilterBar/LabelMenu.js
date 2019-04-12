import React from "react";
import "./FilterBox.css";

const LabelMenu = props => {
  const labels = props.issues.reduce((acc, issue) => {
    issue.labels.forEach((label) => acc.push(label.name));
    return acc;
  }, []);
  const uniquelabels = [...new Set(labels)];
  return (
    <select defaultValue="label" onChange={props.onChange}>
      <option value="label">Label</option>
      {uniquelabels.map(label => {
        return <option value={label}>{label}</option>;
      })}
    </select>
  );
};

export default LabelMenu;
