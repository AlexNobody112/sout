import React from "react";
import { useState } from "react";
import ProjectOptions from "./ProjectOptions";

const ProjectSelector = ({ customSelector, customSelectorLable }) => {
  return (
    <label>
      {/* {customSelectorLable.key} */}
      aksjdhaskd
      <select value={customSelector} name="select">
        {customSelector.map((optionKey) => (
          <ProjectOptions optionKey={optionKey} />
        ))}
      </select>
    </label>
  );
};

export default ProjectSelector;
