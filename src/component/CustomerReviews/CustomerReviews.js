import React, { useContext } from 'react';
import './CustomerReviews.css';
import Review from '../Review/Review';


const data = [
    {
        "name": "Kashem",
        "comment": "Accurate audio takes precedence over noise cancellation",
        "rating": "4.7"
    },
    {
        "name": "sajjad hossain",
        "comment": "Simple, powerful wireless gaming audio for your console of choice",
        "rating": "4.4"
    },
    {
        "name": "rasel khondokar",
        "comment": "Whether you need to take calls or block out distracting noise,",
        "rating": "4.8"
    },
    {
        "name": "roni mirdha",
        "comment": "Solid wire-free earphones with noise cancellation and plenty of bass",
        "rating": "5.0"
    },
    {
        "name": "somaya",
        "comment": "Custom-molded earphones you shape yourself—no audiologist required",
        "rating": "4.5"
    },
    {
        "name": "mariya",
        "comment": "These customizable kids' headphones need better volume control",
        "rating": "4.9"
    },
];

const CustomerReviews = () => {
    return (
        <div>
            <div className="review">
                {
                    data.map(d => <Review data={d}></Review>)
                }
            </div>  
        </div>
    );
};

export default CustomerReviews;