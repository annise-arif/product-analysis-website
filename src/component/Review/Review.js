import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, comment, rating} = props.data;
    return (
        <div className='review-data'>
            <div className="cart">
                <p><b>Name: </b>{name}</p>
                <p><b>Comment: </b>{comment}</p>
                <p><b>Rating: </b>{rating}</p>
            </div>
        </div>
    );
};

export default Review;