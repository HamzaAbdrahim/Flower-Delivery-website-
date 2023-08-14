import { useState } from "react"
import assets from "../assets/imges"
import {faqs} from "../content/index"
import styles from "../style"
const Fqo = () => {
    const [toggol , settoggol] = useState(false)
    function handeclick(index) {
        settoggol(index)
    }

  return (
    <>
    <div className={` ${styles.flexCenter} md:p-20 bg-[#F5F5F7] ${styles.borderweb} border-y my-5`}>
          <div className={` border p-10 md:p-20 bg-white ${styles.borderweb}`}>
              <h1 className={`${styles.heading2} text-center mb-10`}>Subscription FAQ</h1>
              {faqs.map((item, index) => (
                  <>
              <div className={`max-w-[44rem] ${styles.borderweb} border-b py-6 `}>
                      <div key={item.id} onClick={() => handeclick(index)} className={`${styles.flexBetween}  duration-500 ease-out cursor-pointer`}>
                          <h1 className={`${styles.heading4} `}>{item.question}</h1>
                          <img src={assets.fqoarow} alt="arrow" />
                      </div>
                      <div className={`${styles.flexBetween} ${toggol === index ? '' : "hidden"}`}>
                          <h1 className={` ${styles.Body} mt-4 opacity-90`}>{item.answer}</h1>
                      </div>
              </div>
                  </>
              ))}
          </div>
          </div>
      </>
  )
}

export default Fqo