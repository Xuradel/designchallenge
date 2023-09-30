import React, { useState, useEffect, useRef } from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

const Filter = ({ title, icon, options, game_filter, large, medium, firstValue }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(game_filter ? 'Select a game' : `${firstValue}`);
    const filterRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);

    // Function to close the dropdown when clicking outside
    const handleOutsideClick = (e) => {
        if (filterRef.current && !filterRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
    };
    useEffect(() => {
        setIsFlipped(isDropdownOpen);
    }, [isDropdownOpen]);

    useEffect(() => {
        // Attach the global click event listener when the component mounts
        window.addEventListener('click', handleOutsideClick);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setDropdownOpen(false); // Close the dropdown when an option is selected
    };

    const optionsList = options.map((option, index) => (
        <div
            key={index}
            className='filter-option'
            onClick={() => handleOptionClick(option)}
            style={{
                backgroundColor: option === selectedValue ? 'transparent' : 'transparent',
                color: option === selectedValue ? 'white' : '#fff',
                padding: '1rem 1rem', // Added padding
                transition: 'background 0.1s ease', // Added transition
            }}
            onMouseEnter={(e) => {
                // Apply red background on hover
                if (option !== selectedValue) {
                    e.target.style.backgroundColor = '#383c4c';
                }
            }}
            onMouseLeave={(e) => {
                // Restore the original background color when not hovered
                if (option !== selectedValue) {
                    e.target.style.backgroundColor = 'transparent';
                }
            }}
        >
            {option}
        </div>
    ));

    // Define the width based on props
    let filterWidth = '246px'; // Default width

    if (large) {
        filterWidth = '309px';
    } else if (medium) {
        filterWidth = '172px';
    }
    return (
        <div className={`filter ${isDropdownOpen ? 'open' : ''} ${large ? 'large-filter' : ''} `} onClick={toggleDropdown} ref={filterRef} style={{ width: filterWidth }}>
            <div className='filter-left'>
                <div className='filter-left-items'>
                    {icon}
                    <div className='filter-left-middle'>
                        {!game_filter && (
                            <div className='filter-title'>
                                {title}
                            </div>
                        )}
                        <div className='filter-options'>
                            <input
                                placeholder='Filter by...'
                                value={selectedValue}
                                onClick={toggleDropdown}
                            />
                        </div>
                    </div>
                </div>

                <VscTriangleDown
                    fill='#fff'
                    className={` small-arrow ${isFlipped ? 'flip' : ''} ${large ? 'large-arrow' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown();
                        setIsFlipped(!isFlipped); // Toggle the isFlipped state
                    }}
                />

                {isDropdownOpen && (
                    <div className='filter-dropdown'>
                        <div className='dropdown-options'>{optionsList}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;
