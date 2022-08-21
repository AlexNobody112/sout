import React from "react";
import ProjectSelector from "../ProjectSelector/ProjectSelector";

const ProjectInput = ({ dynamicInput, getData, indexGlobal }) => {
  return (
    <>
      {dynamicInput.map((someData) =>
        someData.type !== "select" ? (
          <label key={someData.key}>
            <input
              onChange={(event) => getData(indexGlobal, event)}
              type={someData.type}
              name={someData.name}
              value={someData.value}
              placeholder={someData.placeholder}
            />{" "}
          </label>
        ) : (
          <select name="asdas" id="5">
            <option value="">ssfasd</option>
            <option value="">ssfasd</option>
            <option value="">ssfasd</option>
          </select>
        )
      )}
    </>
  );
};

export default ProjectInput;
