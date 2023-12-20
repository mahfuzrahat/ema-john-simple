import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock, star, description,} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                {/* <img src={props.product.img} alt="" /> */}
                <img src={img} alt="" />
            </div>
            <div>
                {/* <h4>{props.product.name}</h4> */}
                <h4 className='product-name'>{name}</h4>
                <p>by:{seller}</p>
                <div className='product-description'>
                    <div>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button className='add-button' onClick={()=> props.handleAddProduct(props.product)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>add to cart</span></button>
                    </div>
                    <div >
                        <span className='ratings'>{star}</span>
                        <h4>Features</h4>
                        <ul>
                            <li>{description}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;