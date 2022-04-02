import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name, price, picture, writer} = props.product;
    

    return (
        <div className='product'>
            <img src={picture} alt = ""></img>
            <div className='product-info'>
             <p className='product-name'>Name: {name}</p>
             <p className='product-author'>Author: {writer}</p>
             <p className='product-price'>Price: {price}Taka</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;