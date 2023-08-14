import React from 'react'
import assets from '../assets/imges'
import styles from "../style"

function Hero() {
  return (
    <div className='flex flex-col xl:flex-row items-start '>
        <div className={`${styles.padding}  xl:m-0 border-b  ${styles.borderweb}`}>
            <h1 className={`mb-4 ${styles.heading1}`}>Kyiv <span className=' flex max-w-2xl'>
              <p>Luxe Bouquets</p>
            <img src={assets.R} alt="R" className='-mt-10' />
              </span></h1>
            <p className='text-lg not-italic font-normal leading-[140%] font-Gilroy text-blacky max-w-[33rem] mb-[3.38rem]'>Discover Uniquely Crafted Bouquets and 
                Gifts for Any Occasion: Spread Joy with 
                Our Online Flower Delivery Service</p>
                <div className={`flex flex-col md:flex-row pt-6 ${styles.borderweb} border-t`}>
                    <img src={assets.imghero} alt="hero" className={`pr-6 ${styles.borderweb} border-r`} />
                    <p className={`${styles.Caption} mt-4 md:mt-0 items-end flex max-w-[20rem] text-[#121212E5] lg:mr-auto pl-10 md:pl-6`}>Experience the joy of giving with our modern floral studio.
                         Order online and send fresh flowers, 
                        plants and gifts today.</p>
                </div>

        </div>
        <div className='flex flex-col items-end ml-auto'>
          <div className='flex items-center justify-end '>
            <img src={assets.shoping1} className='cursor-pointer   h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem] ' alt="" />
          <img src={assets.carditem1} className='cursor-pointer  h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem] ' alt="carditem1" />
          </div>
          <div className='flex items-center justify-end '>
          <img src={assets.carditem2} alt="carditem1" className=' h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]'  />
            <img src={assets.shoping2} className='cursor-pointer  h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]' alt="" />
          </div>
          <div className='flex items-center justify-end '>
            <img src={assets.shoping3} className='cursor-pointer  h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]' alt="" />
          <img src={assets.carditem3} alt="carditem1" className=' h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]' />
          </div>
          <div className='flex items-center justify-end '>

          <img src={assets.carditem4} alt="carditem1" className=' h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]' />
            <img src={assets.shoping4} className='cursor-pointer  h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]' alt="" />
          </div>
          <div className='flex items-center justify-end '>
            <img src={assets.shoping5} className='cursor-pointer  h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]' alt="" />s
          <img src={assets.carditem5} alt="carditem1" className=' h-[12.2rem] md:h-[18.8rem] xl:h-[22.5rem]' />
          </div>
        </div>
    </div>
  )
}

export default Hero