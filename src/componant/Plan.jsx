import React , {useState} from 'react'
import { plan } from '../content'
import styles from "../style"
import assets from '../assets/imges'
import Inbutton from "./Inbutton"
import Fqo from './Fqo'

const Plan = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
      };
    
      const handleDecrement = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
      };
  return (
    <>
        <div className='flex flex-col-reverse items-start lg:flex-row justify-between'>
            <div  className='flex flex-col justify-center py-20 px-10 '>
                <p className={`${styles.overline} `}>Build Your Subscription</p>
                <div className=' my-4'>
                <h1 className={`${styles.heading3} mb-4`}>Selecting a Plan</h1>
                <p className={`${styles.Body} max-w-[26rem]`}>Enjoy free shipping on every order and save up to 30%. 
Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard.
 You're in complete control of your flower delivery experience.</p>
                </div>
            {plan.map(item => (
                <>
                <div key={item.id} className='flex flex-col md:flex-row gap-4 justify-between '>
                    <img src={item.img} alt="" className='object-contain mt-auto' />
                    <ol class="list-disc p-4 flex flex-col gap-1">
                        <li className={`${styles.Subtitle} mb-4`}>Classic</li>
                        <li>{item.price}</li>
                        <li>{item.delivery}</li>
                        <li>{item.budget}</li>
                        <li>{item.vase}</li>
                        <li>{item.bonus}</li>
                        <li>{item.discount}</li>
                    </ol>
                </div>
                <Inbutton name="Select" style={`!w-full ${item.id === plan.length ? "mb-10" : ""}`} /></>
            ) )}
            <h1 className={`${styles.heading4} pt-10 border-t ${styles.borderweb} `}>How often do you want flowers delivered ?</h1>
            <p className={`${styles.Body} my-4`}>Select the delivery frequency</p>
            <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-4 `}>
                <div className={`w-full py-5 ${styles.borderweb} border text-center cursor-pointer`}>Monthly</div>
                <div className={`w-full py-5 ${styles.borderweb} border text-center cursor-pointer`}>Bi-Weekly</div>
                <div className={`w-full py-5 ${styles.borderweb} border text-center cursor-pointer`}>Weekly</div>
            </div>
            <h1 className={`${styles.heading4} ${styles.borderweb} border-t pt-10 mt-10`}>How many deliveries would you like ?</h1>
            <p className={`${styles.Body} mt-4 max-w-xl `}>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </p>
            <div className={`flex items-center gap-4 my-6`}>
                    <div className={`${styles.flexCenter} ${styles.borderweb} border`}>
                    <img src={assets.nigtive} onClick={handleDecrement} alt="" className={`cursor-pointer ${styles.borderweb}  px-[0.78rem]`}/>
                    <p className={`${styles.Body} text-xl ${styles.borderweb} border-x pt-5 h-16 m-auto py-4s px-[1.62rem]`}>{quantity}</p>
                    <img src={assets.plus} onClick={handleIncrement} alt="" className={`cursor-pointer ${styles.borderweb}   px-[0.78rem]`}/>
                    </div>
                 </div>
            <button className={`w-full h-14 bg-blacky ${styles.button} text-white`}>
          Check out
        </button>

            </div>
            <img src={assets.planimg} alt="planimg" className='object-contain -mt-4' />
        </div>
        <Fqo />
    </>
  )
}

export default Plan