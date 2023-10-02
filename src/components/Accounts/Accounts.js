import React, { useState, useEffect } from 'react';
import Container from '../Container';
import Heading from '../Heading';
import './Accounts.css';
import Filter from '../Filter';
import { GiSwapBag, GiBroadsword } from 'react-icons/gi';
import { RiSortAsc, RiSortDesc } from 'react-icons/ri'
import { ImLeaf } from 'react-icons/im'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Search from '../Search';
import FilterSplitter from '../FilterSplitter';
import items from '../../data/items.json'
import Item from '../Item';


const Accounts = () => {
    const types = ['All', 'Weapons', 'Armours', 'Others', 'Consumables', 'Jewelry', 'Chirstmas Event'];
    const price = ['All', '$0 - $400', '$401 - $800', '$801 - $1200', '$1201 - $1500'];
    const games = ['RS3', 'OSRS', 'League of Legends', 'Valorant']
    const sort = ['Featured', 'Price: (Low to High)', 'Price: (High to Low)']
    const [selectedItem, setSelectedItem] = useState(1);
    const [currentSortOption, setCurrentSortOption] = useState('Featured');
    const [sortedItems, setSortedItems] = useState(items);

    useEffect(() => {
        sortItems();
    }, [currentSortOption]);

    const handleItemClick = (itemNumber) => {
        setSelectedItem(itemNumber);
    }

    const handleSortChange = (sortOption) => {
        setCurrentSortOption(sortOption);
    };

    const sortItems = () => {
        let sortedItemsCopy = [...items];
        switch (currentSortOption) {
            case 'Price: (Low to High)':
                sortedItemsCopy.sort((a, b) => a.item_price - b.item_price);
                break;
            case 'Price: (High to Low)':
                sortedItemsCopy.sort((a, b) => b.item_price - a.item_price);
                break;
            default:
                // No sorting or default sorting logic here
                break;
        }
        setSortedItems(sortedItemsCopy);
    };
    return (
        <div className='accounts-section'>
            <div className='accounts-top'>
                <Container transparent>
                    <Heading title={'Condimentum consectetur'} lg white />
                </Container>
                <Container transparent>
                    <div className='filters'>
                        <div className='filter-game-search'>
                            <div className='filters-left'>
                                <Filter icon={<GiBroadsword size={28} fill='#fff' />} title={'Select a game'} fill='#39E29D' options={games} game_filter={true}
                                    large
                                />
                            </div>
                            <div className='filters-middle'>
                                <Search />
                            </div>
                        </div>
                        <div className='filters-right'>
                            <Filter icon={<GiSwapBag size={28} fill='#39E29D' />} title={'Price'} fill='#39E29D' options={price} medium firstValue={'All'} />
                            <FilterSplitter />
                            <Filter icon={<ImLeaf size={28} fill='#39E29D' />} title={'Item Type'} fill='#39E29D' options={types} medium firstValue={'All'} />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='accounts-bot'>
                <Container transparent>
                    <div className='main-accounts-container'>
                        <div className='accounts-sortby'>
                            <div className='accounts-tracker'>
                                Showing 20 from 125
                            </div>
                            <div className='accounts-sorter'>
                                <Filter
                                    icon={currentSortOption === 'Price: (Low to High)' ? <RiSortAsc size={32} fill='#39E29D' /> : <RiSortDesc size={32} fill='#39E29D' />}
                                    title={'Sort By'}
                                    fill='#39E29D'
                                    options={sort}
                                    medium
                                    firstValue={'Featured'}
                                    onSelect={handleSortChange}
                                />
                            </div>
                        </div>
                        <div className='accounts-cards-container'>
                            {sortedItems.map((item, index) => (
                                <Item key={index} item={item} />
                            ))}
                        </div>
                        <div className="accounts-pagination">
                            <div className="pagination-items">
                                <div className="pagination-arrow arrow-left">
                                    <FaChevronLeft fill="#fff" />
                                </div>
                                {[1, 2, 3, 4, '...', 11].map((itemNumber, index) => (
                                    <div
                                        key={index}
                                        className={`pagination-item ${selectedItem === itemNumber ? 'selected' : ''}`}
                                        onClick={() => handleItemClick(itemNumber)}
                                    >
                                        {itemNumber}
                                    </div>
                                ))}
                                <div className="pagination-arrow arrow-right">
                                    <FaChevronRight fill="#fff" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Accounts;
