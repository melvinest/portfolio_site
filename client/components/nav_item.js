import React from 'react';

const NavItem = ({ label, link }) => {
  return (
    <a className="nav-item" href={link}>
      {label}
    </a>
  );
};

export default NavItem;