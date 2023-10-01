import React, { useState } from 'react'
import { TbPointFilled } from 'react-icons/tb'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import { SiRiotgames } from 'react-icons/si'
import { FaShoppingCart } from 'react-icons/fa'
const Item = ({ item }) => {
    const { on_sale, in_stock, image_url, item_name, item_price, item_discount, item_description } = item;
    const [value, setValue] = useState(1);
    const [showTooltip, setShowTooltip] = useState(false);


    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (
        <div className="item-card">
            <div className='item-top'>
                <div className='item-status'>
                    <div className='item-sale'>
                        {on_sale ?
                            <div className='item-sale-text'>
                                <TbPointFilled className='item-bullet-point' />
                                <div>ON SALE</div>
                            </div> :
                            ''
                        }
                    </div>
                    <div className='item-stock'>
                        {in_stock ?
                            <div className='in_stock'>
                                In Stock
                            </div>
                            :
                            <div className='no_stock'>
                                No Stock
                            </div>
                        }
                    </div>
                </div>
                <div className='item-inventory'>
                    <div className="numeric-input">
                        <div className="inventory-input-container">
                            <input
                                type="number"
                                id="numericInput"
                                value={value}
                                onChange={(e) => setValue(parseInt(e.target.value))}
                                min="0"
                            />
                            <div className='inventory-input-buttons'>
                                <button onClick={handleIncrement} className="increment">
                                    <GoTriangleUp />
                                </button>
                                <button onClick={handleDecrement} className="decrement">
                                    <GoTriangleDown />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item-center-image'>
                <img src={image_url} alt='item'></img>
            </div>
            <div className='item-center-title'>
                <div className='item-title'>
                    {item_name}
                </div>
                <div className='item-title-icon'>
                    <SiRiotgames size={22} fill='#39E29D' />
                </div>
            </div>
            <div className='item-bottom-price'>
                <div className='discounted-price'>
                    ${item_discount}
                </div>
                <div className='standard-price'>
                    {item_price}
                </div>
            </div>
            <div className="item-bottom-description">
                <div
                    className={`two-line-ellipsis ${showTooltip ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {item_description}
                </div>
                <div className={`tooltip ${showTooltip ? 'show' : ''}`}>{item_description}</div>
            </div>
            <div className='item-buttons'>
                <div className='details-button'>
                    Details
                </div>
                <div className='add-button'>
                    <div className='add-button-text'>
                        Add
                    </div>
                    <div className='add-button-cart'>
                        <FaShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item
