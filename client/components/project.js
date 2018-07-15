import React from 'react';

const Project = ({ title, pic, description, achievements, tech, github, url }) => {
  return (
    <div className="prj-container">
      <div className="prj-image-container">
        <a href={url || github}><img className="prj-image" src={pic} /></a>
      </div>
      <div className="prj-detail-container">
        <div className="prj-name">{title}</div>
        <div className="prj-desc">{description}</div>
        <ul className="prj-head">
          {achievements.map((achievement, i) => (<li key={i}>{achievement}</li>))}
        </ul>
        <div className="prj-tech">Stack: {tech}</div>
        <div className="prj-links">
          <div className="prj-link">github: <a href={github}> {github}</a></div>
          {url ? (<div className="prj-link">url: <a href={url}> {url}</a></div>) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;