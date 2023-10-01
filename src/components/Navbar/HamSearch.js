import React from 'react'
import { FiSearch } from 'react-icons/fi';

const HamSearch = () => {
    return (
        <div className='search-bar search-bar2'>
            <>
                <FiSearch color='#CECFD5' />
                <div className='input-container'>
                    <input type='text' id='myInput' className='floating-input' placeholder='' />
                    <label htmlFor='myInput' className='input-label'>
                        Search
                    </label>
                </div>
            </>
        </div>
    );
}

export default HamSearch
