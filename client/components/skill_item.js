import React from 'react';

const SkillItem = ({ content, icon, label}) => {
  return (
    <div className="skill-container">
      <div className="skill-header-container">
        <i className={`${icon} skill-icon`} />
        <div className="skill-label">{label}</div>
      </div>
      <div className="skill-content">{content}</div>

    </div>
  );
};

export default SkillItem;