import React from 'react';
import Project from './project';
import { projects } from './contents/data';

const Projects = () => {
  return (
    <div className="prjs-container">
      <h1 className="title">Projects</h1>
      {projects.map((project, i) => (<Project key={i} {...project} />))}
    </div>
  );
};

export default Projects;