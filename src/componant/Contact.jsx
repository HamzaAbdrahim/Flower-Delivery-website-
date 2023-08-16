import assets from "../assets/imges"
import styles from "../style"
import Submit from "./Submit"

const Contact = () => {
  return (
    <div className= {`${styles.borderweb}  flex flex-col-reverse xl:flex-row`}>
        <div>
        <div className= {`${styles.padding} `}>
        <h1 className={`${styles.heading2}`}>To Contact Us</h1>
        <p className={`${styles.Subtitle} mt-6 mb-4`}>We will call you back</p>
        <form action="" method="post" className={`${styles.flexitems} gap-4`}>
            <input 
            type="text" 
            placeholder="+380 XX XXX XX XX"
            className={`p-4 border border-solid border-Gray  ${styles.Caption}`} />
            <Submit value="book a call"  />
        </form>
        </div>
            <div className={`${styles.flexitems} flex-col lg:flex-row text-center`}>
            <div className="flex flex-col">
            <span className={`${styles.heading3} ${styles.borderweb} border-y border-x lg:border-x-0 w-[22.5rem] px-10 py-4 text-center`}>Phone</span>
            <div className={` w-[22.5rem] h-[18.7rem] p-6 ${styles.flexCenter} ${styles.borderweb} border-x lg:border-x-0 mb-4 lg:mb-0 border-b flex-col`}>
                <p className={`${styles.flexitems} mb-[1.66rem] gap-1 text-base not-italic font-semibold leading-[120%] tracking-[0.025rem] font-Gilroy text-blacky`}><img src={assets.call} alt="" />+380980099777</p>
                <p className={`${styles.flexitems}  gap-1 text-base not-italic font-semibold leading-[120%] tracking-[0.025rem] font-Gilroy text-blacky`}><img src={assets.call} alt="" />+380980099111</p>
            </div>
            </div>
            <div className="flex flex-col">
            <span className={`${styles.heading3} ${styles.borderweb} border  w-[22.5rem] px-10 py-4 text-center`}>Address</span>
            <div className={` w-[22.5rem] h-[18.7rem] p-6 ${styles.flexCenter} ${styles.borderweb} border-x border-b flex-col`}>
                <p className={`${styles.flexitems} mb-[1.66rem] ${styles.overline}`}>opening hours: 8 to 11 p.m.</p>
                <p className={`${styles.flexitems}   gap-1 text-base not-italic font-semibold leading-[120%] tracking-[0.025rem] font-Gilroy text-blacky`}><img src={assets.pin_drop} alt="" />15/4 Khreshchatyk Street, Kyiv </p>
            </div>
            </div>
            </div>
        </div>
        <div className=" ml-auto ">
            <img src={assets.Rightcolum} className="h-[45rem]" alt="" />
            <div className={`${styles.flexBetween} flex-col sm:flex-row ${styles.borderweb} border-x border-b`}>
                <div className={`w-full py-4 px-4 text-left sm:text-center ${styles.borderweb} sm:border-r`}>
                    <h2 className={`${styles.heading3}`}>Follow us</h2>
                </div>
                <div className="inline-flex pb-4 px-4 sm:px-0 sm:pb-0 w-full sm:justify-center gap-8">
  <a target="_blank" href="http://www.instagram.com"><img src={assets.Instagram} alt="Instagram" /></a>
  <a target="_blank" href="http://www.pinterest.com"><img src={assets.Pinterest} alt="Pinterest" /></a>
  <a target="_blank" href="http://www.facebook.com"><img src={assets.Facebook} alt="Facebook" /></a>
  <a target="_blank" href="http://www.twitter.com"><img src={assets.Twitter} alt="Twitter" /></a>
  <a target="_blank" href="http://www.telegram.com"><img src={assets.Telegram} alt="Telegram" /></a>
     </div>
            </div>
        </div>
    </div>
  )
}

export default Contact