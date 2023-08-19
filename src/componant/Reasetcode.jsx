import styles from "../style"
import Privacy from "./Privacy"
import Inputs from "./Inputs"


const Reasetcode = (prop) => {
  console.log(prop.showreset);
  return (
    <div className={`fixed ${prop.showreset ? "bottom-5" : "mb-[60rem]"} z-30 w-full lg:w-[45.125rem]  h-[45rem] pt-20 pb-10 px-20 bottom-5  left-1/2 transform -translate-x-1/2 bg-white shadow-2xl duration-500 ease-in `}>
    <h1 className={`${styles.heading2}`}>Reset your password</h1>
    <p className={`${styles.heading6} my-6`}>Please provide your phone number below to receive a code for restoring access to your account</p>
    <form method=''>
        <label htmlFor="numbers" className={`${styles.heading6}`}>Enter your mobile number</label>
        <Inputs 
        placeholder = "+380 XX XXX XX XX" />
        <input type="submit" value="continue" className={`${styles.button} h-[3.5rem] w-full px-14 mt-4 cursor-pointer bg-blacky ${styles.flexCenter} text-white`} />  
    </form>
    <Privacy />
</div>
  )
}

export default Reasetcode