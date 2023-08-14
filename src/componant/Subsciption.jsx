import assets from "../assets/imges"
import { benfits } from "../content"
import styles from "../style"
import Howwork from "./Howwork"
import Plan from "./Plan"

const Subsciption = () => {
  return (
    <><div className={`${styles.flexBetween} flex-col xl:flex-row`}>
          <img src={assets.subimg} alt="subimg" className="object-contain w-full lg:w-auto" />
          <div className={`p-20`}>
              <h1 className={`${styles.heading2} mb-6`}>Flower Subscription</h1>
              {benfits.map((item, index) => (
                  <div key={index}>
                      <p className={`${styles.heading6} mb-2`}>{item.titel}</p>
                      <ol className={`${styles.Body} ${index === benfits.length ? "mb-0" : "mb-6"} list-disc max-w-[40rem] mr-auto`}>{item.discrption}</ol>
                  </div>
              ))}
              <button className={`${styles.borderweb} w-full lg:w-auto border ${styles.flexCenter} h-14 px-6 mt-[4.44rem]`}>Explore Plans</button>
          </div>
      </div>
      <Howwork />
      <Plan />
      </>
  )
}

export default Subsciption