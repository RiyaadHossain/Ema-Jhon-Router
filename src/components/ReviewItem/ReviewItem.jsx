import React from 'react';

const ReviewItem = ({ item }) => {
    const {name, price, shipping, quantity} =item
    return (
        <div>
            <span> <h1>{name}</h1> - {price}</span>
        </div>
    );
};

export default ReviewItem;