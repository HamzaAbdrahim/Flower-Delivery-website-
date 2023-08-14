import assets from "../assets/imges"
import styles from "../style"

const Mobilordersummery = (prop) => {
  return (
    <div className={`p-10 bg-primary ${styles.flexBetween} ${styles.borderweb} ${prop.styles} border-b `}>
        <div className="inline-flex gap-2 cursor-pointer">
            <img src={assets.shopping_cart} alt="shopping_cart" />
            <p className={`${styles.Subtitle}`}>Show order summary</p>
            <img src={assets.expand_more} alt="expand_more" />
        </div>
            <p className="flex items-end">$100</p>
    </div>
  )
}

export default Mobilordersummery