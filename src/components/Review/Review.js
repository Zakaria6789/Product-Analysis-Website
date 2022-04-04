import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Review = ({ reviewer }) => {
    const { img, name, review } = reviewer;
    return (
        <div className='reviewer'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{review}</p>
            <div className='rating-icon'>
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStar} />
                <FontAwesomeIcon className='icon' icon={faStarHalfStroke} />
            </div>
        </div>
    );
};

export default Review;