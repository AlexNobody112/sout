import React from "react";

const ProjectInput = ({dynamicInput}) => {
  return (
    <label>
      {dynamicInput.label}
      <input type={dynamicInput.type} name={dynamicInput.name} placeholder={dynamicInput.placeholder} />
    </label>
  );
};

export default ProjectInput;
