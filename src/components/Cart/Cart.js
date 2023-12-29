import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for(let i = 0; i <cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    // let shipping = 0;
    // for(let i = 0; i < cart.length; i++){
    //     const sCost = cart[i];
    //     shipping = shipping + sCost.shipping;
    // }
    
    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax))

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Item Ordered: {cart.length}</p>
            <table className='cart-table'>
                <tr>Shipping & Handling: ${shipping}</tr>
                <tr>Total before tax: ${total}</tr>
                <tr>Estimated Tax: ${tax}</tr>
                <tr className='price'>Total Price: ${grandTotal}</tr>                
            </table>
            <button className='order-btn'>Review your order</button>
        </div>
    );
};

export default Cart;