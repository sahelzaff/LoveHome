import React, { useState, useEffect, useRef } from 'react';
import './review.css';
import { assets } from '../../assets/assets';
import './reviewData.js'

const Review = ({ reviews }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        const nextSlideIndex = (currentSlide + 1) % 4;
        console.log("Next slide index:", nextSlideIndex);
        setCurrentSlide(nextSlideIndex);
    };
    
    
    
   

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000); 
        return () => clearInterval(intervalId); 
    }, [currentSlide]);

    useEffect(() => {
        if (sliderRef.current) {
            const sliderWidth = sliderRef.current.offsetWidth;
            sliderRef.current.style.transition = 'transform 0.5s ease-in-out'; 
            sliderRef.current.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
        }
    }, [currentSlide]);

    return (
        <div>
            <div className="client-head">
                <h2>What our Client say</h2>
            </div>

            <div className="review-slider-container">
                <div className="slider" ref={sliderRef}>
                    {reviews.map((review, index) => (
                        <div key={index} className="slide">
                            <div className="box">
                                <div className="profile">
                                    <img src={assets.buying} alt={review.name} className="profile-photo" />
                                    <div className="profile-details">
                                        <h3>{review.name}</h3>
                                        <div className="stars">
                                            {[...Array(review.stars)].map((_, index) => (
                                                <span key={index} className="star">&#9733;</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="review-text">{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
            <button className="next" onClick={goToNextSlide}>&#10095;</button> */}
        </div>
    );
};

export default Review;
