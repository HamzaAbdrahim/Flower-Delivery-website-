import styles from '../style';
import assets from '../assets/imges';
import { useContext  , useState , useEffect } from 'react';
import {  Cartcontext } from '../Statecontant';

const Shoppingcart = (prop) => {
  const { cart , checkout , removeItemFromCart , total  } = useContext(Cartcontext);

  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart)
  };
  

  return (
    <>
      {prop.show && (
        <div className="fixed z-[50] h-screen w-full bg-scondary opacity-[80%] top-0 left-0"></div>
      )}
      <div
        className={`fixed z-[70] h-screen ${
          prop.show ? 'right-0' : '-right-[70rem]'
        } w-full lg:w-1/2 top-0  bg-white shadow-2xl duration-500 ease-in`}
      >
        <div
          className={`${styles.borderweb} ${styles.flexBetween} border-b px-10 py-[1.625rem]`}
        >
          <p className={`${styles.heading6}`}>Shopping Cart</p>
          <img
            src={assets.closecart}
            alt="close"
            className="cursor-pointer"
            onClick={prop.handelshowclose}
          />
        </div>
        <div className={`${styles.borderweb} grid grid-cols-1 gap-4 border-b p-10 overflow-scroll w-full h-64`}>
          {cart.length > 0 ?cart.map(item => (
            <>
            <div className='flex items-center'>
            <img src={item.product.img} alt="product" className={`h-40 w-40 !border-Gray ${styles.borderweb} border-t border-r`} />
            <div className="flex flex-col gap-2 ml-4">
              <p className={`${styles.Subtitle}`}>{item.product.titel}</p>
              <p className={`${styles.Body}`}>Quantity ({item.quantity})</p>
              <p className={`${styles.Subtitle} `}>${item.product.price}</p>
            </div>
          <p onClick={() => removeItemFromCart(item.product.id)} className="text-[#808080]  cursor-pointer float-left ml-auto text-base not-italic font-semibold leading-[120%] tracking-[0.025rem]">
            Remove
          </p>
            </div>
            </>
          )) : <h1 className={` p-6  text-2xl m-auto text-Gray capitalize`}>the cart is empty</h1>}
          </div>
        <div className={`${styles.borderweb} ${styles.flexBetween} border-b p-10`}>
          <p className={`${styles.Subtitle}`}>Subtotal</p>
          <p className={`${styles.heading5}`}>${total}</p>
        </div>
        <div className={`${styles.borderweb} border-b p-10`}>
          <textarea
            name="gift"
            id=""
            placeholder="Gift Message"
            className={`w-full h-6 p-5 focus:outline-none ${styles.Body}`}
          />
        </div>
        <div className={`${styles.borderweb}  p-10`}>
          <p className={`${styles.Caption} text-center text-xl max-w-md mx-auto -mb-52`}>
            Shipping & taxes calculated at checkout
            Free standard shipping within Kyiv
          </p>
        </div>
        <button onClick={checkout} className={`w-full absolute bottom-0 h-14 bg-blacky ${styles.button} text-white`}>
          Check out
        </button>
      </div>
    </>
  );
};

export default Shoppingcart;