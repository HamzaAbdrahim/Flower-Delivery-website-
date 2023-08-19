import React, { useState } from 'react';
import styles from '../style';
import assets from '../assets/imges';
import Buttontwo from './Buttontwo';

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviews = [
    {
      quote: 'Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!',
      author: 'Ronald Richards',
    },
    {
      quote: 'The service was excellent, and the flowers were beautiful. I will definitely order from this shop again!',
      author: 'Alice Johnson',
    },
    {
      quote: 'I was amazed by the quality of the flowers and the fast delivery. This flower shop exceeded my expectations!',
      author: 'Emily Thompson',
    },
    {
      quote: 'The bouquet I received was stunning! The flowers were fresh and arranged beautifully. Highly recommended!',
      author: 'Michael Davis',
    },
  ];

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className={`${styles.padding} ${styles.flexCenter} `}>
      <div className='flex flex-col items-center'>
        <img src={assets.googllogo} alt="googllogo" className='mb-2' />
        <span className={`${styles.overline} `}>Reviews</span>
        <h2 className={`${styles.heading2} mt-6 mb-4`}>Our Clients say</h2>
        <div className={`${styles.flexBetween}`}>
          <img
            src={assets.leftarrow}
            className='cursor-pointer transition-transform duration-300 hover:scale-110'
            alt="Previous Review"
            onClick={handlePrevReview}
          />
          <div>
            <p className='text-center text-[2rem] not-italic font-normal leading-[120%] text-blacky font-BIZ transition-opacity duration-300'>
              <span className='transition-all duration-[1s] ease-[ease] delay-[0s] text-[3rem] italic font-normal leading-[120%]'>“</span>
              {currentReview.quote}
              <span className='text-[3rem] italic font-normal leading-[120%]'>“</span>
            </p>
            <p className={`${styles.heading6} text-center mt-4 transition-opacity duration-300`}>– {currentReview.author}</p>
            <div className='flex items-center justify-center mt-8 gap-4 relative transition-opacity duration-300'>
              {reviews.map((review, index) => (
                <span
                  key={index}
                  className={`cursor-pointer w-3 h-3 bg-scondary rounded-full transition-all duration-300 ${
                    index === currentReviewIndex ? 'bg-sky-400' : ''
                  }`}
                  onClick={() => setCurrentReviewIndex(index)}
                ></span>
              ))}
            </div>
            <div className={`${styles.flexCenter} mt-16 transition-opacity duration-300`}>
              <Buttontwo name="Read reviews" />
            </div>
          </div>
          <img
            src={assets.rightarrow}
            className='cursor-pointer transition-transform duration-300 hover:scale-110'
            alt="Next Review"
            onClick={handleNextReview}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;