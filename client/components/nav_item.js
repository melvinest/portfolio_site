import React from 'react';

const NavItem = ({ label, link, handleClick, addStyle=null }) => {
  return (
    <a onClick={() => handleClick(label)} className={`nav-item ${addStyle}`}  href={link}>
      {label}
    </a>
  );
};

export default NavItem;