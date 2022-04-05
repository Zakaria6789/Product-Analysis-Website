import React from 'react';
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const threeReviews = reviews.slice(0, 3);

    return (
        <div>
            {/********************* Banner-Part ******************/}
            <div className='banner'>
                <div className="banner-left">
                    <h1>Best Camera With<br /> <span>Better Performance</span></h1>
                    <p>This is a very gorgious look camera.It's design also very unique.For the mid-renge budgeter,this this the best choice.This camera model name is Camon EOS C.This camera used a very crystal clear lens.By defaulf,You get also 3 lens with this camera.If you are a Photographer And If you are finding a good camera within a little budget.So that You Can Buy this model whihout any confusion.</p>
                    <button>Buy Now</button>
                </div>
                <div className="banner-right">
                    <img src="camera2.png" alt="" />
                </div>
            </div>

            {/********************* Customer-Reviews ******************/}
            <div className="customer-reviews">
                <div className="review-title">
                    <h2>Customer Reviews(3)</h2>
                </div>
                <div className='reviewers'>
                    {
                        threeReviews.map(review => <Review
                            key={review.id}
                            reviewer={review}
                        ></Review>)
                    }
                </div>
                <div className='review-btn'>
                    <Link to='/reviews'><button>See All Reviews</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;