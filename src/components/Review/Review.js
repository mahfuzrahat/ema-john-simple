import React, { useEffect, useState } from 'react';
import { clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import HappyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = ()=> {
        setCart([]);
        setOrderPlaced(true);
        clearLocalShoppingCart();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart)
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //Data from Cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProduct = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product
        });
        setCart(cartProduct);
    }, [])

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={HappyImage} alt="" />
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(pd => <ReviewItem 
                        key={pd.key}
                        removeProduct ={removeProduct}
                        product={pd}></ReviewItem>)
                }

                <div style={{textAlign:'center'}}>{ thankyou }</div>

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='order-btn'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;