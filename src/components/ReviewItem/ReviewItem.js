import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, img, price} = props.product;
    const reviewItemStyle={
        borderBottom:"1px solid lightGray",
        marginBottom:'5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className='review-item'>            
            <img src={img} alt="" />           
            <h4 className='product-name'>{name}</h4>
            <p>Quantity {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button style={{marginBottom:'5px'}} className='add-button'
            onClick={()=>props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;