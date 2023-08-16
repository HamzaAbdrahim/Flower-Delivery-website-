import React from 'react'
import styles from '../style'
import Buttontwo from './Buttontwo'

const About = () => {
  return (
    <div className= {`${styles.borderweb} border-b grid grid-cols-1 lg:grid-cols-2 items-start`}>
        <div className={`${styles.padding} ${styles.borderweb} border-t`}>
<h1 className={`${styles.heading2}`}>About us</h1>
        </div>
        <div className={`${styles.padding} ${styles.borderweb} border-t md:border-l`}>
            <p className={`${styles.overline}`}>our story</p>
            <h2 className={`${styles.heading3} mb-4 mt-6`}>Kyiv LuxeBouquets</h2>
            <p className={`${styles.Body} mb-16`}>We are a modern local floral studio, which specializes
                 in the design and delivery of unique bouquets.
                 We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. 
                Ordering flowers online has never been easier.</p>
                <Buttontwo name = 'Lern more' />
        </div>
    </div>
  )
}

export default About