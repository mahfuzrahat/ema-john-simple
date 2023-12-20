import React from 'react';

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
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Shipping & Handling: {shipping}</p>
            <p>Total before tax: {total}</p>
            <p>Estimated Tax: {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;