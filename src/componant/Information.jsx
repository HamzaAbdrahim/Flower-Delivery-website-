import assets from "../assets/imges"
import styles from "../style"
import Contantinfo from "./Contantinfo"
const Information = (prop) => {
  return (
      <>
      <div className={`${styles.borderweb} border-r p-10 ${prop.styles} `}>
      <div className="inline-flex gap-3">
        <p className="inline-flex gap-2 cursor-pointer">Information <img src={assets.Vector} alt="arwo" /></p>
        <p className="inline-flex gap-2 cursor-pointer">Shipping <img src={assets.Vector} alt="arwo" /></p>
        <p className="inline-flex gap-2 cursor-pointer">Payment <img src={assets.Vector} alt="arwo" /></p>
      </div>
      <div className={`${styles.Body} bg-scondary py-10 pl-10 pr-[8.62rem] mt-10`}>
        <p>Already have an account?<a href="*" className="underline">Log in</a>  for faster checkout</p>
      </div>
      <Contantinfo />

      <p className={`${styles.borderweb} ${styles.Subtitle} border-y !text-Gray  !border-Gray pt-10 pb-6 my-10 pr-4 `}>2 Shipping details</p>
      <p className={` ${styles.Subtitle} ${styles.borderweb} border-b !text-Gray !border-Gray pb-6  pr-4`}>3 Payment</p>

    </div>
    </>
  )
}

export default Information