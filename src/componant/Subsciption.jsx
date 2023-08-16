import assets from "../assets/imges"
import { benfits } from "../content"
import styles from "../style"
import Howwork from "./Howwork"
import Buttontwo from "./Buttontwo"
import Plan from "./Plan"

const Subsciption = () => {
  return (
    <>
    <div className={`inline-flex flex-col xl:flex-row`}>
          <img src={assets.subimg} alt="subimg" className="object-contain w-full lg:w-auto" />
          <div className={`p-20`}>
              <h1 className={`${styles.heading2} mb-6`}>Flower Subscription</h1>
              {benfits.map((item, index) => (
                  <div key={index}>
                      <p className={`${styles.heading6} mb-2`}>{item.titel}</p>
                      <ol className={`${styles.Body} opacity-90 ml-5 ${index == benfits.length ? "mb-0" : "mb-6"} max-w-[40rem] mr-auto before:absolute relative before:top-2 before:-left-4 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blacky`}>{item.discrption}</ol>
                  </div>
              ))}
              <Buttontwo name = "Explore Plans" styles = "mx-auto w-full mt-[4.45rem] "  />
          </div>
      </div>
      <Howwork />
      <Plan />
      </>
  )
}

export default Subsciption