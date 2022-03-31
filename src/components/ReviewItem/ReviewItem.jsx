import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ item,removeItem }) => {
    const {name, img, price, quantity, shipping} =item
    return (
        <div className='review-container'>
            <div>
                <img src={img} alt="" />
           </div>
           <div className="review-details-button">
                <div className="review-details">
                    <div className='name-quantity'>
                    <h3 title={name}>{name?.length > 20 ? `${name.slice(0, 20)}...` : name}</h3><span className='quantity'>{quantity }</span>
                    </div>
                    <p>Price: <span className='color'>${price}</span></p>
                    <p>Shipping Charge: <span className='color'>${shipping}</span></p>
               </div>
                <button onClick={() => removeItem(item)} className="delete-button">
                    <FontAwesomeIcon icon={faTrashAlt}/>
               </button>
           </div>
        </div>
    );
};

export default ReviewItem;