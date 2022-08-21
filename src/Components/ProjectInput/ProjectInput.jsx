import React from "react";
import ProjectSelector from "../ProjectSelector/ProjectSelector";

const ProjectInput = ({ dynamicInput, getData, indexGlobal }) => {
  return (
    <>
      {dynamicInput.map((someData) => (
        <label key={someData.key}>
          {someData.label}
          <input
            onChange={(event) => getData(indexGlobal, event)}
            type={someData.type}
            name={someData.name}
            value={someData.value}
            placeholder={someData.placeholder}
          />
        </label>
      ))}
    </>
  );
};

export default ProjectInput;
