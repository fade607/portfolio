import React from "react";
import "../css/projects.css";
function Projects() {
  return (
    <div div className="my_project">
      <h1>My Project</h1>
      <div id="projects" className="projects">
        <div className="project">
          <a href="https://focused-mccarthy-2e4a04.netlify.app/">
            {" "}
            <img src="../images/project1.png" alt="project 1" />
          </a>
        </div>{" "}
        <div className="project">
          <a href="https://react-course-comfy-sloth-store.netlify.app/">
            {" "}
            <img src="../images/project2.png" alt="project 1" />
          </a>
        </div>
        <div className="project">
          <a href="https://focused-mccarthy-2e4a04.netlify.app/">
            {" "}
            <img src="../images/project1.png" alt="project 1" />
          </a>
        </div>
        <div className="project">
          <a href="https://focused-mccarthy-2e4a04.netlify.app/">
            {" "}
            <img src="../images/project1.png" alt="project 1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
