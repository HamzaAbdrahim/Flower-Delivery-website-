import assets from '../assets/imges'
import styles from '../style'
import Submit from "./Submit"
import Input from "./Inputs"
import { useState , useEffect } from 'react'
import { useContext } from 'react';
import {  Cartcontext } from '../Statecontant';
import Mobilordersummery from "./Mobilordersummery"

const Ordersumrey = (prop) => {
  const [totalprice , settotalprice] = useState(0)
  const [mobilsize , setmobilsize] = useState(false)
  const { cart , total } = useContext(Cartcontext);
    useEffect(() => {
    const handleResize = () => {
      setmobilsize(prop.show ? "" : window.innerWidth <= 1025);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  
  return (
    <>
    {mobilsize ? <Mobilordersummery /> : 
    <div className={`p-10 bg-primary ${prop.styles}`}>
      <h2 className={`${styles.overline} ${prop.show ? "hidden" : ""}`}>Order summary</h2>
      {cart.length > 0 ?
       cart.map(item => (
         <div className={`${styles.flexitems} mt-10 pb-10`}>
        <img src={assets.carditemprice1} alt="carditemprice1" className='h-40 w-40 mr-4' />
        <div>
          <h3 className={`${styles.Subtitle}`}>{item.product.titel}</h3>
          <p className={`${styles.Body}`}>Quantity ({item.quantity })</p>
        </div>
        <p className={`${styles.Subtitle} ml-auto`}>${item.product.price}</p>
      </div>
        ))
        :<h1 className={` p-6  text-2xl mx-auto text-Gray capitalize`}>the cart is empty</h1>}
      <div className={`py-6 border-y ${styles.borderweb} !border-Gray`}>
        <h3>If you have our gift card, enter the code to get discounts</h3>
        <form action="" method="post" className={`inline-grid grid-cols-2 w-full gap-4 mt-4 `}>
          <Input placeholder="Gift card" />
          <Submit value="Apply" />
        </form>
      </div>
      <div className={`py-6 border-b ${styles.borderweb} !border-Gray`}>
        <p className={`${styles.Body} ${styles.flexBetween} mb-6`}>Subtotal<span>${total}</span></p>
        <p className={`${styles.Body} ${styles.flexBetween}`}>Shipping<span>Calculated at next step</span></p>
      </div>
      <p className={`${styles.Subtitle} ${styles.flexBetween}`}>Total<span className={`${styles.heading5} mt-6`}>${total}</span></p>
      <div className={`w-fit mx-auto mt-32`}>
        <p className={`${styles.Caption} items-end !text-blacky flex`}>Secure Checkout <img src={assets.lock} alt="lock" className='ml-1' /></p>
      </div>
    </div>
    }
    </>
  )
}

export default Ordersumrey