import { Link } from "react-router-dom"
import assets from "../assets/imges"
import styles from "../style"
import Storys from "./Storys"
import Submit from "./Submit.jsx"

const Ourstory = () => {
  return (
    <>
    <div className={`${styles.borderweb} grid grid-cols-1 lg:grid-cols-2 border-b `}>
          <div className={`py-[10.43rem] text-center px-[6.47rem] `}>
              <span className={`${styles.heading2}`}>Our Story</span>
              <img src={assets.About} alt="" className="mx-auto my-6" />
              <span className={`${styles.heading2}`}>Kyiv LuxeBouquets</span>
              <p className="mt-6 max-w-md mx-auto">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
              <div className="inline-flex mt-16 w-full sm:justify-center gap-8">
                  <a target="_blank" href="http://www.instagram.com" className={`p-3 border rounded-full ${styles.borderweb}`}><img src={assets.Instagram} alt="Instagram" /></a>
                  <a target="_blank" href="http://www.pinterest.com" className={`p-3 border rounded-full ${styles.borderweb}`}><img src={assets.Pinterest} alt="Pinterest" /></a>
                  <a target="_blank" href="http://www.facebook.com" className={`p-3 border rounded-full ${styles.borderweb}`}><img src={assets.Facebook} alt="Facebook" /></a>
                  <a target="_blank" href="http://www.twitter.com" className={`p-3 border rounded-full ${styles.borderweb}`}><img src={assets.Twitter} alt="Twitter" /></a>
                  <a target="_blank" href="http://www.telegram.com" className={`p-3 border rounded-full ${styles.borderweb}`}><img src={assets.Telegram} alt="Telegram" /></a>
              </div>
          </div>
          <img src={assets.Storyimg} alt="Storyimg" className="ml-auto h-full" />
      </div>
      <div className={`${styles.flexCenter} p-20 ${styles.borderweb} flex-col text-center  border-b`}>
              <p className={`${styles.overline}`}>OUR STORY</p>
              <h3 className={`${styles.heading3} mt-6 mb-4`}>Our Founder's Passion </h3>
              <p className={`${styles.Body} mx-auto max-w-2xl`}>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
          </div>
          <Storys />
          <div className={`${styles.flexCenter} p-20 ${styles.borderweb} flex-col text-center  border-t mt-3`}>
              <h3 className={`${styles.heading2} mt-6 mb-4`}>Discover Our Beautiful Bouquets</h3>
              <p className={`${styles.Subtitle} mx-auto max-w-2xl mb-16`}>Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
          <Link to="/category">
          <Submit value = "shop now" styles = "uppercase" />
          </Link>
          </div>
          </>
  )
}

export default Ourstory