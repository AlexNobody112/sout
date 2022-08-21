import React from "react";
import { useState } from "react";
import ProjectOptions from "../ProjectOptions/ProjectOptions";

const ProjectSelector = ({ customSelector }) => {
  return (
    <label key={customSelector.key}>
      {customSelector.label}
      <select name={customSelector.name}>
        {customSelector.optionName.map((optionKey) => (
          <ProjectOptions optionKey={optionKey} />
        ))}
      </select>
    </label>
  );
};

export default ProjectSelector;
