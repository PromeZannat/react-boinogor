import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import './Bookdata.css';

const Bookdata = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    }, []);

const handleAddToCart = (product) =>{
    console.log(product);
}

    return (
        <div className='bookdata-container'>
            <div className='books-container'>
            {
                products.map(product=><Product
                key = {product.id}
                product = {product}
                handleAddToCart ={handleAddToCart}
                ></Product>)
            }
            </div>
            <div className='cart-container'>
                <ShoppingCart cart={cart}></ShoppingCart>
            </div>
        </div>
        
    );
};

export default Bookdata;