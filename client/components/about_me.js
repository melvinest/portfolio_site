import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-cont">
      <div className="img-container">
        <img className="profile-pic" src="http://assets2.ignimgs.com/2015/03/11/the-last-of-us-movie-officially-confirmed-at-comic-con-7522bd70-e72f-4b5b-b9a4-a52ea6afa559jpeg-57aaab_1280w.jpg"/>
      </div>
      <div className="about-me-desc">
        <h1 className="title">About Me</h1>
        <div className="desc-content">
          I am a software engineer well versed in Javascript, Python, React and NodeJS/ExpressJS. Previously designed and built civil structures as a civil/structural engineer, I developed a lot of tools/apps that eliminated repetition, improved man-hours and reduced file sizes. Realizing that building applications and software was a lot more fun and fulfilling, I decided to shift my focus to software engineering, bringing with me all the engineering skills and experience that I gained.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;