import { Link } from "react-router-dom"
import styles from "../style"



const Buttontwo = (prop) => {
  return (
    <Link to="/Ourstory" className={`${styles.borderweb} ${styles.button} ${prop.styles} border hover:bg-blacky hover:!text-white duration-150 ease-linear focus:bg-white active:!text-Gray ${styles.flexCenter} w-[10.9375rem] h-14`}>
        {prop.name}
    </Link>
  )
}

export default Buttontwo