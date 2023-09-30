import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
const Cart = ({amount}) => {
    return (
        <div className='cart'>
            <div className='cart-icon'>
                <FaShoppingCart size={13}/>
            </div>
            <div className='cart-amount'>
                {`CART (${amount})`}
            </div>
        </div>
    )
}

export default Cart
