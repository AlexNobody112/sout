import React from "react";

const ProjectTextArea = ({ textAreaData }) => {
  return (
    <div >
      <label>
        {textAreaData.label}
        <textarea name={textAreaData.label} id={textAreaData.id}></textarea>
      </label>
    </div>
  );
};

export default ProjectTextArea;
