import React from 'react';

const AboutMe = ({ pic, title, description }) => {
  return (
    <div className="about-me-cont">
      <div className="img-container">
        <img className="profile-pic" src={pic}/>
      </div>
      <div className="about-me-desc">
        <h1 className="title">{title}</h1>
        <div className="desc-content">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;