import assets from "../assets/imges"
import styles from "../style"

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
            <input type="submit" value="book a call" className={`${styles.button} h-[3.5rem] px-14 cursor-pointer bg-blacky ${styles.flexitems} text-white`} />

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
        <div className="flex ml-auto">
            <img src={assets.Rightcolum} className="w-full xl:w-auto" alt="" />
        </div>
    </div>
  )
}

export default Contact