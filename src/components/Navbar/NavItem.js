import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './Navbar.css'; // Import your CSS file

const NavItem = ({ title, currencyItem }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const containerClassName = `navbar-option-container ${isHovered && !currencyItem ? 'navitem-hover' : ''} ${currencyItem ? 'currency-item' : ''}`;

    return (
        <div className={containerClassName}>
            <div
                className={`navbar-option`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {title} <FiChevronDown size={20} className={'flip-chevron'} />
            </div>
        </div>
    );
};

export default NavItem;
