import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ item }) => {
    const {name, img, price, quantity, shipping} =item
    return (
        <div className='review-container'>
            <div>
                <img src={img} alt="" />
           </div>
           <div className="review-details-button">
                <div className="review-details">
                    <div className='name-quantity'>
                    <h3 title={name}>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</h3><span className='quantity'>{quantity }</span>
                    </div>
                    <p>Price: <span className='color'>${price}</span></p>
                    <p>Shipping Charge: <span className='color'>${shipping}</span></p>
               </div>
                <div className="delete-button">
                    <button>Remove</button>
               </div>
           </div>
        </div>
    );
};

export default ReviewItem;