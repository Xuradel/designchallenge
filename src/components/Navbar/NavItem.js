import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './Navbar.css';
import DropdownMenu from './DropdownMenu';

const NavItem = ({ title, currencyItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`navbar-option-container ${currencyItem ? 'currency-item' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`navbar-option`}>
        {title} {<FiChevronDown size={20} className={'flip-chevron'} />}
      </div>
      {isHovered && !currencyItem && (
        <DropdownMenu title={title}/>
      )}
    </div>
  );
};

export default NavItem;
