import React from "react";

import "./ProjectCard.css";

function ProjectCard({ projectName, field, deadline }) {
  return (
    <div className="flex items-center justify-center card flex-col">
      <div id="CardDiv2" className="text-center max-w-xs w-1/2">
        <div className="h-64 shadow-sm bg-slate-300"></div>
        <h2 className="text-lg text-left text-blue-600 pt-5 text-center "> {projectName} </h2>
        <div id="FieldAndDeadlineDivs">
          <div className={`text-sm ${deadline != null ? "text-left" : "text-center" } text-gray-400 pl-5 pb-5`}>
            {field}
          </div>
          <div id="DeadlineDiv" className="text-sm text-left text-gray-400 pl-5 pb-5">
            {deadline}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
