import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
const NavButton = ({title}) => {
    return (
        <div className='nav-button-container'>
            <div className='nav-button'>
                <div className='nav-button-text'>
                    {title}
                </div>
                <div className='nav-button-img'>
                    <BsPersonFill size={18}/>
                </div>
            </div>
        </div>
    )
}

export default NavButton
