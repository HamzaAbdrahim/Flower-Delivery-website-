import assets from "../assets/imges"
import styles from "../style"
import Inputs from "./Inputs"
import Privacy from "./Privacy"

const Singup = (prop) => {
  return (
    <div className={` ${prop.show ? "left-1/2" : "-right-[96rem]"} fixed z-[80] w-full lg:w-[45.125rem] h-[45rem] pt-20 pb-10 px-20 bottom-5  transform -translate-x-1/2 bg-white shadow-2xl duration-500 ease-in `}>
    <h1 className={`${styles.heading2}`}>Sign up.</h1>
    <p className={`${styles.heading6} my-6`}>Become a member and enjoy personalized gift recommendations, fast checkout, and more.</p>
    <div className={`${styles.flexBetween}`}>
        <div className={`${styles.flexitems}`}>
            <img src={assets.check} alt="check" />
            <p className={`${styles.Subtitle} my-6`}>+380980275095</p>
        </div>
        <img src={assets.edit} alt="edit" className="cursor-pointer" />
    </div>
    <form method=''>
        <label htmlFor="numbers" className={`${styles.heading6}`}>Enter code from sms</label>
        <Inputs 
        placeholder = "XX XX XX" />
    <p className={`${styles.CaptionSmall} mt-2 mb-4 text-scondary !text-base`}>Please check your phone for a message containing a code to enter</p>
        <input type="submit" value="Join us" className={`${styles.button} h-[3.5rem] w-full px-14 cursor-pointer bg-blacky ${styles.flexCenter} text-white`} />  
    </form>
    <p className={`${styles.links} mt-6 mr-2 text-scondary`}>Didn't receive a code? <span className="text-blacky">Resend code</span></p>
    <Privacy />
</div>
  )
}

export default Singup