import React from 'react';
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews-container'>
            <h2>What Our Customer Say!</h2>
            <div className='reviewers'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        reviewer={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;