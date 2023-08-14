import React from 'react'
import styles from '../style'
import assets from '../assets/imges'

const Service = () => {
  return (
    <div>
        <h1 className={`${styles.heading1} p-20 text-center`}>Our Service</h1>
        <div className={`${styles.borderweb} border-t grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-center`}>
            <img src={assets.image} alt="image" />
            <div className='mt-20 lg:mt-0'>
                <p className={`${styles.overline}`}>service</p>
                <h2 className={`${styles.heading2} mb-4 mt-6`}>Flower Subcriptions</h2>
                <p className={`${styles.Subtitle} max-w-xl mx-auto`}>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                <button className={`${styles.button} mt-16 ${styles.borderweb} border py-4 px-6`}>Subscribe Now</button>
            </div>
        </div>
    </div>
  )
}

export default Service