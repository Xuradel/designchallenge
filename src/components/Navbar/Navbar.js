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
import { SiEpicgames } from 'react-icons/si'
import { Link } from 'react-router-dom';



const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <p>Dropdown Menu Content</p>
        </div>
    );
};

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [selectedMobileItem, setSelectedMobileItem] = useState(null);
    const gamesList = [
        "Among Us",
        "Apex Legends",
        "Call of Duty: Warzone",
        "Counter-Strike: Global Offensive",
        "Dota 2",
        "Fall Guys: Ultimate Knockout",
        "Fortnite",
        "Grand Theft Auto V",
        "League of Legends",
        "Minecraft",
        "Overwatch",
        "PlayerUnknown's Battlegrounds",
        "Rainbow Six Siege",
        "Rocket League",
        "The Elder Scrolls V: Skyrim",
        "Valorant",
        "World of Warcraft",
        "Animal Crossing: New Horizons",
        "Cyberpunk 2077",
        "Dead by Daylight",
        "Destiny 2",
        "FIFA 21",
        "Genshin Impact",
        "Breath of the Wild",
    ];
    const gamesList2 = [
        "Dead Cells",
        "Hollow Knight",
        "The Witcher 3: Wild Hunt",
        "Stardew Valley",
        "Terraria",
        "Undertale",
        "Hades",
        "Dark Souls III",
        "Sekiro: Shadows Die Twice",
        "Resident Evil Village",
        "The Legend of Zelda: Ocarina of Time",
        "Super Mario Odyssey",
        "Red Dead Redemption 2",
        "The Last of Us Part II",
        "Horizon Zero Dawn",
        "Celeste",
        "Monster Hunter: World",
        "Super Smash Bros. Ultimate",
        "Gears 5",
        "Assassin's Creed Valhalla",
        "Rainbow Six Siege",
        "Fallout 4",
        "Civilization VI",
    ];

    const gamesList3 = [
        "Mortal Kombat 11",
        "Bioshock Infinite",
        "The Outer Worlds",
        "Cuphead",
        "Bastion",
        "Transistor",
        "The Stanley Parable",
        "Limbo",
        "Ori and the Blind Forest",
        "Subnautica",
        "Doom Eternal",
        "Star Wars Jedi: Fallen Order",
        "Control",
        "The Witness",
        "Katana Zero",
        "Slay the Spire",
        "Undertale",
        "Braid",
        "Oxenfree",
        "Hyper Light Drifter",
        "Firewatch",
        "Hollow Knight",
        "Dead by Daylight",
    ];
    const gamesList4 = [
        "OSRS",
        "Runescape 3",
        "Valorant",
        "League of Legends"
    ];
    const gamesList5 = [
        "OSRS",
        "Runescape 3"
    ];
    const gamesList6 = [
        "Celeste",
        "Terraria",
        "Sekiro: Shadows Die Twice",
        "Red Dead Redemption 2",
        "Hades",
        "Fall Guys: Ultimate Knockout",
        "Stardew Valley",
        "Cuphead",
        "Breath of the Wild",
        "Apex Legends",
        "Minecraft",
        "Super Smash Bros. Ultimate",
        "Control",
        "Genshin Impact",
        "The Witcher 3: Wild Hunt",
        "Monster Hunter: World",
        "Among Us",
        "Civilization VI",
        "Rainbow Six Siege",
        "Overwatch",
        "Super Mario Odyssey",
        "Fortnite",
        "PlayerUnknown's Battlegrounds",
        "Dota 2"
    ];
    const handleHover = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const openHamburgerMenu = () => {
        setShowHamburgerMenu(true);
    };

    const closeHamburgerMenu = () => {
        setShowHamburgerMenu(false);
    };

    const handleMobileItemClick = (itemIndex) => {
        setSelectedMobileItem(selectedMobileItem === itemIndex ? null : itemIndex);
    };
    const selectGameList = () => {
        const gameLists = [gamesList, gamesList2, gamesList3, gamesList4, gamesList5, gamesList6];
        return gameLists[selectedMobileItem % gameLists.length];
    };

    return (
        <nav>
            <div className='navbar-left'>
                <div className='hamburger' onClick={openHamburgerMenu}>
                    <GiHamburgerMenu fill="#9A9BA1" size={20.5} />
                </div>
                <Link to="/">
                    <Logo />
                </Link>
                <NavSplitter />
                <div className='left-categories'>
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
            {showDropdown && <DropdownMenu />}
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
                    <div className="hamburger-content" style={{ maxHeight: 'calc(100vh - 60px)', overflowY: 'auto' }}>
                        {['Currency', 'Items', 'Accounts', 'Services', 'Swap', 'Sell Currency', 'Sell Item', 'Sell Account', 'Skins', 'Unique Names', 'USD'].map((item, index) => (
                            <div key={index} className="ham-item">
                                <div className="ham-item-text" onClick={() => handleMobileItemClick(index)}>
                                    {item}
                                    <div className="ham-item-chevron">
                                        <BiSolidChevronDown />
                                    </div>
                                </div>
                                <div className={`mobile-dropdown-menu ${selectedMobileItem === index ? 'open' : ''}`}>
                                    {selectGameList().map((game, gameIndex) => (
                                        <div key={gameIndex} className="mobile-dropdown-item">
                                            <SiEpicgames /> {game}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="horizontal-splitter h2"></div>
                    </div>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
