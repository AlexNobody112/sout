import React from "react";

const ProjectOptions = ({ optionKey }) => {
  return <option value={optionKey.key}>{optionKey.optionName}</option>;
};

export default ProjectOptions;
