import React from 'react';
import SkillItem from './skill_item'

const Skills = () => {
  let labels = ['FRONT-END', 'BACK-END', 'DATABASE', 'TOOLS'];
  let icons = ['fas fa-laptop', 'fas fa-server', 'fas fa-database', 'fas fa-wrench']
  let contents = [
    'JavaScript, ES6/7, HTML/CSS, ReactJS, Redux, AngularJS, Backbone.js, jQuery, Flow Router',
    'NodeJS/ExpressJS, Python, MeteorJS, Redis, REST',
    'MongoDB/Mongoose, MySQL, PostgreSQL',
    'Underscore, Webpack, Jest/Enzyme, Mocha/Chai, Docker, Git, VBA, Matlab, AWS, Heroku'
  ];
  return (
    <div className="skills-cont">
      <h1 className="title">Skills</h1>
      <div className="skills-content-container">
        {labels.map((label, i) => (<SkillItem
          key={label}
          label={label} 
          icon={icons[i]}
          content={contents[i]}
        />))}
      </div>
    </div>
  );

};

export default Skills;