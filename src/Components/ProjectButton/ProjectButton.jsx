import React from "react";

const ProjectButton = ({ buttonData, onClick }) => {
  return <button onClick={onClick} >{buttonData.label}</button>;
};

export default ProjectButton;
