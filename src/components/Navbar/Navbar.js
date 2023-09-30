import React from 'react'
import './Navbar.css'
import NavItem from './NavItem'
import NavButton from './NavButton'
import Logo from './Logo'
import NavSplitter from './NavSplitter'
import { GiHamburgerMenu } from 'react-icons/gi'
import Cart from './Cart'
const Navbar = () => {
    return (
        <nav>
            <div className='navbar-left'>
                <GiHamburgerMenu fill="#9A9BA1" size={20.5} className='hamburger'/>
                <Logo />
                <NavSplitter />
                <div className='left-categories'>
                    <NavItem title="CURRENCY" />
                    <NavItem title="ITEMS" />
                    <NavItem title="ACCOUNTS" />
                    <NavItem title="SERVICES" />
                    <NavItem title="SWAP" />
                    <NavItem title="SELL" />
                </div>
            </div>
            <div className='navbar-right'>
                <NavItem title="USD" currencyItem />
                <Cart amount={5}/>
                <NavButton title="SIGN IN" />
            </div>
        </nav>
    )
}

export default Navbar
