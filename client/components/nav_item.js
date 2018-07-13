import React from 'react';

const NavItem = ({ label, link, handleClick }) => {
  return (
    <a onClick={() => handleClick(label)} className="nav-item" href={link}>
      {label}
    </a>
  );
};

export default NavItem;