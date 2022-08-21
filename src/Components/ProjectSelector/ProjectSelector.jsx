import React from "react";
import { useState } from "react";
import ProjectOptions from "../ProjectOptions/ProjectOptions";

const ProjectSelector = ({ customSelector }) => {
  return (
    <label>
      {customSelector.selectlabel}
      <select
        value={customSelector.selectValue}
        name={customSelector.selectType}
      >
        {customSelector.optionName.map((optionKey) => (
          <ProjectOptions optionKey={optionKey} />
        ))}
      </select>
    </label>
  );
};

export default ProjectSelector;
