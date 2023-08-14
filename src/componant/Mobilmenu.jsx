import assets from "../assets/imges"
import styles from '../style'



const Mobilmenu = (prop) => {
  

  return (
    <>
    {prop.open && <div className="fixed z-[50] h-screen w-screen bg-scondary opacity-[35%] lg:hidden top-0 left-0"></div>}
    <div ref={prop.ref} className={`fixed z-[60] h-screen  top-0  bg-white shadow-2xl duration-500 ease-in ${prop.open ? "left-0 " : "-left-[60rem]"} xl:hidden`}>
        <div  className={`${styles.borderweb} border-b py-2 px-4 cursor-pointer`} >
        <img src={assets.close}
         alt="close"
         onClick={prop.handelclose} />
        </div>
        <div onClick={prop.showsing} className={`p-6 ${styles.borderweb} border-b cursor-pointer ${styles.heading5}`}>
        Sign in
        </div>
        <div className={`p-6 ${styles.borderweb} border-b ${styles.heading5}`}>
        Shop
        </div>
        <div className={`p-6 ${styles.borderweb} border-b ${styles.heading5}`}>
        Servise
        </div>
        <div className={`p-6 ${styles.borderweb} border-b ${styles.heading5}`}>
        Contact
        </div>
        <div className={`p-6 ${styles.borderweb} border-b ${styles.heading5}`}>
        About us
        </div>
        <div className={`p-6 ${styles.borderweb} flex flex-col gap-4 border-b ${styles.heading5}`}>
        <span className={`${styles.links}`}><a href="#">Shipping & returns</a></span>
        <span className={`${styles.links} block`}><a href="#">Terms & conditions</a></span>
        <span className={`${styles.links} block`}><a href="#">Privacy policy</a></span>
        </div>
        <div className={`px-6 py-14 ${styles.flexitems} gap-8 `}>
          <img src={assets.Instagram} alt="Instagram" className="cursor-pointer" />
          <img src={assets.Pinterest} alt="Pinterest" className="cursor-pointer" />
          <img src={assets.Facebook} alt="Facebook" className="cursor-pointer" />
          <img src={assets.Twitter} alt="Twitter" className="cursor-pointer" />
          <img src={assets.Telegram} alt="Telegram" className="cursor-pointer" />
        </div>
    </div>
    </>
  )
}

export default Mobilmenu