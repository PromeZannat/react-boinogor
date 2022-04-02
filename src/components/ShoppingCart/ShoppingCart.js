import React from 'react';
import './ShoppingCart.css'

const ShoppingCart = () => {
    return (
        <div className='shoppingCart'>
            <h3>Selected Books:</h3>
            <button className='cart-select'>
                <p>Choose One</p>
            </button>
            <button className='cart-delete'>
                <p>Choose Again</p>
            </button>
        </div>
    );
};

export default ShoppingCart;