import React from 'react'
import styles from '../style'

function Paymenturl(prop) {
  return (
    <div className={`${styles.borderweb} ${styles.flexCenter} cursor-pointer gap-2 border py-6 px-[5.03rem]`}>
        <img src={prop.assest} className='w-6 h-6' alt="assest" />
        <p className={`${styles.button}`}>{prop.titel}</p>
    </div>
  )
}

export default Paymenturl