import React from "react";

const ProjectInput = ({ dynamicInput }) => {
  return (
    <label>
      {dynamicInput.label}
      <input
        defaultValue={dynamicInput.value}
        type={dynamicInput.type}
        name={dynamicInput.name}
        placeholder={dynamicInput.placeholder}
        key={Date.now()}
      />
    </label>
  );
};

export default ProjectInput;
