import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = ({ham}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the component mounts
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 570;

  return (
    <div className={`search-bar ${isMobile ? 'mobile' : ''}`}>
      {!isMobile && (
        <>
          <FiSearch color='#CECFD5' />
          <div className='input-container'>
            <input type='text' id='myInput' className='floating-input' placeholder='' />
            <label htmlFor='myInput' className='input-label'>
              Search
            </label>
          </div>
        </>
      )}
      {!ham && isMobile && (
        <button className='search-button'>
          <FiSearch color='#CECFD5'size={24}/>
        </button>
      )}
    </div>
  );
};

export default Search;
