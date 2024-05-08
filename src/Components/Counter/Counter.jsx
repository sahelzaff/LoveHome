import React, { useState, useEffect, useRef } from 'react';
import './Counter.css';

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const target1 = 6000;
    const target2 = 80;

    const intervalTime1 = 10; 
    const intervalTime2 = 30; 

    const counterRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    startCounting();
                    observer.unobserve(entry.target); 
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    const startCounting = () => {
        const interval1 = setInterval(() => {
            if (count1 < target1) {
                setCount1(prevCount => Math.min(prevCount + 15, target1)); 
            }
        }, intervalTime1);

        const interval2 = setInterval(() => {
            if (count2 < target2) {
                setCount2(prevCount => Math.min(prevCount + 1, target2)); 
            }
        }, intervalTime2);

        const interval3 = setInterval(() => {
            if (count3 < target2) {
                setCount3(prevCount => Math.min(prevCount + 1, target2)); 
            }
        }, intervalTime2);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    };

    return (
        <div ref={counterRef} className='main'>
            <div className="head">
                <h3>We make it easier for people to move to where they want to go</h3>
            </div>
            <div className="counter-container">
                <div className="counter">
                    <div>{count1}+</div>
                    <h3>Satisfied customers</h3>
                </div>
                <div className="counter">
                    <div>{count2}+</div>
                    <h3>5-Star reviews</h3>
                </div>
                <div className="counter">
                    <div>{count3}+</div>
                    <h3>Years of combined experience</h3>
                </div>
            </div>
        </div>
    );
}

export default Counter;
