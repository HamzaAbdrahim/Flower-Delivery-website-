import assets from "../assets/imges"
import styles from "../style"
import Submit from "./Submit"
import Input from "./Inputs"
import Paymenturl from "./Paymenturl"
import Chosenway from "./Chosenway"

function Payment() {
  return (
        <>
        <div className="flex flex-col gap-10">
          <div className={`${styles.flexBetween} ${styles.borderweb} border-b pb-6 pr-4`}>
              <div className='inline-flex gap-1'>
                  <img src={assets.check} alt="check" />
                  <p className={`${styles.Subtitle}`}>Contact information</p>
              </div>
              <img src={assets.edit} alt="edit" className='flex items-end' />
          </div>
          <div className={`${styles.flexBetween} ${styles.borderweb} border-b pb-6 pr-4`}>
              <div className='inline-flex gap-1'>
                  <img src={assets.check} alt="check" />
                  <p className={`${styles.Subtitle}`}>Shipping details</p>
              </div>
              <img src={assets.edit} alt="edit" className='flex items-end' />
          </div>
      </div><h1 className={`${styles.Subtitle} mt-6 mb-4`}>3 Payment</h1><form action="" method="post" className='grid grid-cols-1 gap-4'>
              <label className={`${styles.Subtitle} after:!text-xl`} htmlFor="Subscribe">I don't know the address, please call the recipient.</label>
              <Input placeholder="Card Number" />
              <div className={`${styles.flexBetween} gap-3`}>
                  <Input placeholder="MM / YY" />
                  <Input placeholder="CVV Code" />
              </div>
              <Submit value="make a purchase" />
          </form><p className={`${styles.heading6} mt-4 mb-3`}>Or pay using:</p><div className={`grid grid-cols-2 gap-3 ${styles.borderweb} border-b pb-6 !border-Gray`}>
              <Paymenturl assest={assets.Apple} titel="Apple Pay" />
              <Paymenturl assest={assets.Google} titel="Google Pay" />
          </div>
          </>
  )
}

export default Payment