import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller,ratings,  rating, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='pruduct-info'>
                <h6 className='product-name'>{name}</h6>
                <h6 className='product-name'>Price: ${price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;