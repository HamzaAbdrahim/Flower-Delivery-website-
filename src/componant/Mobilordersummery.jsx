import { useState } from "react"
import assets from "../assets/imges"
import styles from "../style"
import Ordersumrey from "./Ordersumrey"

const Mobilordersummery = (prop) => {
  const [show , setshow] = useState(false)
 const handelshow = () => {
  setshow(prev => (!prev))
 }
  return (
    <>
    <div className={`p-10 bg-primary ${styles.flexBetween} ${styles.borderweb} ${prop.styles} border-b `}>
      <div onClick={handelshow} className="inline-flex gap-2 cursor-pointer">
        <img src={assets.shopping_cart} alt="shopping_cart" />
        <p className={`${styles.Subtitle}`}>Show order summary</p>
        <img src={assets.expand_more} alt="expand_more" />
      </div>
      <p className="flex items-end">{show ? "" : "$100" }</p>
    </div>
    {show && <Ordersumrey show = {show} />}
    </>
  )
}

export default Mobilordersummery