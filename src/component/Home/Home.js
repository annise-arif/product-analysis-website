import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import './Home.css';

const Home = () => {
    
    return (
        <div className='main-container'>
            <div className='home-container'>
                <div className="product-update">
                    <h1>Your Next Headphone <br />
                    <span>Your best Headphone</span>
                    </h1>
                    <p>
                        The best headphones deliver the very best value for your
                        money — but that doesn't mean these are all budget buys.
                        While we have included some of our favorite headphone bargains,
                        sometimes the best headphones listed here are based on an 
                        outstanding feature set,
                    </p>
                    <button>Live demo</button>
                </div>
              <div className="img-container">
                <img src="https://i.pinimg.com/originals/8c/bf/15/8cbf154777218d5663ea92514af35bb2.jpg" alt="" />
              </div>
           </div>

           {/* customer review section */}

           <div className="customer-reviews">
              <h2>Customer Reviews</h2>
              <CustomerReviews></CustomerReviews>
              <button className='review-btn'>See All Reviews</button>
           </div>

        </div>
    );
};

export default Home;