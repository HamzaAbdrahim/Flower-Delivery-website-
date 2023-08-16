import React, { useState } from 'react'
import assets from '../assets/imges'
import styles from '../style'
import Submit from "./Submit"
import Input from "./Inputs"
import Calendar from './Calendar.JSX'

const Shipping = () => {
    const [showcalendar , setshowcalendar] = useState(false)
    function handelshowcalender() {
        setshowcalendar(prev => (!prev))
    }
  return (
        <>
        <div className={`${styles.flexBetween} ${styles.borderweb} border-b pb-6 pr-4`}>
          <div className='inline-flex gap-1'>
              <img src={assets.check} alt="check" />
              <p className={`${styles.Subtitle}`}>Contact information</p>
          </div>
          <img src={assets.edit} alt="edit" className='flex items-end' />
      </div><div>
              <h1 className={`${styles.Subtitle} mt-6 mb-4`}>2 Shipping details</h1>
              <form action="" method="post" className='grid grid-cols-1 gap-4'>
                  <Input placeholder="Recipients Name" />
                  <Input placeholder="Recipients Phone number *" />
                  <div className='relative'>
                      <Input placeholder="Data of Delivery" />
                      <img src={assets.calendar_month} onClick={handelshowcalender} alt="calendar_month" className='cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-4' />
                  </div>
                  <Calendar show = {showcalendar} />
                  <div className='relative'>
                      <Input placeholder="Data of Delivery" />
                      <img src={assets.arrow_drop_down} alt="arrow_drop_down" className='cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-4' />
                  </div>
                  <div className={`${styles.flexBetween} gap-3`}>
                      <Input placeholder="Street" />
                      <Input placeholder="Apartment Number" />
                  </div>
                  <div className="flex items-start gap-3">
                      <input type="checkbox" name="subscribe" id="Subscribe" className="w-8 h-8 cursor-pointer relative after:absolute after:w-4 after:h-4 transition-all duration-500 ease-in-out after:bg-[#121212] after:checked:opacity-100 after:opacity-0 before:transition-opacity after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:hover:opacity-50 border-2 border-solid border-[#121212] bg-[#D2D2D7] appearance-none " />
                      <label className={`${styles.Subtitle} after:!text-xl`} htmlFor="Subscribe">I don't know the address, please call the recipient.</label>
                  </div>
                  <Submit value="Continue to Payment" />
              </form>
          </div>
          </>

  )
}

export default Shipping