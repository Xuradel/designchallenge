import React, { useState } from 'react';
import './Navbar.css';
import NavItem from './NavItem';
import NavButton from './NavButton';
import Logo from './Logo';
import NavSplitter from './NavSplitter';
import { GiHamburgerMenu } from 'react-icons/gi';
import Cart from './Cart';
import { AiOutlineClose } from 'react-icons/ai'
import HamSearch from './HamSearch';
import { BiSolidChevronDown } from 'react-icons/bi'

// Create a DropdownMenu component
const DropdownMenu = () => {
    // You can customize the menu content here
    return (
        <div className="dropdown-menu">
            {/* Menu content */}
            <p>Dropdown Menu Content</p>
        </div>
    );
};

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

    // Function to handle hover and show the dropdown menu
    const handleHover = () => {
        setShowDropdown(true);
    };

    // Function to handle mouse leave and hide the dropdown menu
    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const openHamburgerMenu = () => {
        setShowHamburgerMenu(true);
    };

    const closeHamburgerMenu = () => {
        setShowHamburgerMenu(false);
    };
    return (
        <nav>
            <div className='navbar-left'>
                <div className='hamburger' onClick={openHamburgerMenu}>
                    <GiHamburgerMenu fill="#9A9BA1" size={20.5} />
                </div>
                <Logo />
                <NavSplitter />
                <div className='left-categories'>
                    {/* Update the NavItem components to include hover handlers */}
                    <NavItem title="CURRENCY" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                    <NavItem title="ITEMS" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                    <NavItem title="ACCOUNTS" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                    <NavItem title="SERVICES" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                    <NavItem title="SWAP" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                    <NavItem title="SELL" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
                </div>
            </div>
            <div className='navbar-right'>
                <NavItem title="USD" currencyItem />
                <Cart amount={5} />
                <NavButton title="SIGN IN" />
            </div>
            {showDropdown && <DropdownMenu />} {/* Render the dropdown menu when showDropdown is true */}
            {showHamburgerMenu && (
                <div className="hamburger-menu" style={{ left: showHamburgerMenu ? '0' : '-100%' }}>
                    <div className='button-search'>
                        <button className="close-button" onClick={closeHamburgerMenu}>
                            <AiOutlineClose /> Close
                        </button>
                        <div className='hamburger-search'>
                            <HamSearch />
                        </div>
                    </div>
                    <div className="horizontal-splitter"></div>
                    <div className='hamburger-content'>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Currency
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Items
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Accounts
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Services
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Swap
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Sell Currency
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Sell Item
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Sell Account
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Skins
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                Unique Names
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                        <div className='ham-item'>
                            <div className='ham-item-text'>
                                USD
                            </div>
                            <div className='ham-item-chevron'>
                                <BiSolidChevronDown />
                            </div>
                        </div>
                        <div className="horizontal-splitter h2"></div>
                    </div>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
