import React from 'react';
import Rating from 'react-rating-stars-component';

const StarRating = ({ value }) => {
    return (
        <Rating
            value={value / 2}
            edit={false}
            size={24}
        />
    );
};

export {StarRating};