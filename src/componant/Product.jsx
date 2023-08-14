import assets from "../assets/imges";
import { useState } from 'react';
import { carsoul, category } from "../content";
import styles from "../style";
import Inbutton from "./Inbutton"
import Suggestproduct from "./Suggestproduct";
import {useParams} from "react-router-dom"
import { useContext } from "react";
import { Cartcontext } from "../Statecontant";


const Product = () => {
    const [quantity, setQuantity] = useState(0);
    const [leadtoanthorpage, setleadtoanthorpage] = useState(false);
    const { addItemToCart }  = useContext(Cartcontext)

    const {id} = useParams()
    const product = category.find(item => item.id === id);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
    addItemToCart(product , quantity)
      setQuantity(0);
      setleadtoanthorpage(true)

    } else {
      alert('you must det up something')
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <>
    <div className="flex flex-col  justify-between xl:flex-row ">
    <img src={product.img} alt="" className="md:h-[50rem] h-[38rem] md:ml-auto lg:ml-0 object-contain" />
        <div className="p-10">
            <p className={`${styles.overline}`}>Fresh Flowers / <span className="text-Gray">Rosy Delight</span></p>
            <h1 className={`${styles.heading3} mt-6 mb-4`}>{product.titel} - {product.price.slice(5)}</h1>
            <p className={`${styles.Body} max-w-2xl`}>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance.
                 The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p>
                 <div className={`flex items-center gap-4 my-6`}>
                    <p className={`${styles.Subtitle}`}>Quantity</p>
                    <div className={`${styles.flexCenter} ${styles.borderweb} border`}>
                    <img src={assets.nigtive} onClick={handleDecrement} alt="" className={`cursor-pointer ${styles.borderweb}  px-[0.78rem]`}/>
                    <p className={`${styles.Body} text-xl ${styles.borderweb} border-x pt-5 h-16 m-auto py-4s px-[1.62rem]`}>{quantity}</p>
                    <img src={assets.plus} onClick={handleIncrement} alt="" className={`cursor-pointer ${styles.borderweb}   px-[0.78rem]`}/>
                    </div>
                 </div>
                 <p className={`${styles.Subtitle} flex justify-between`}>Excellent Combination with:<span className={`${styles.Body} !text-Gray`}>Vase Not Included</span></p>
                 <div className={`flex items-center justify-center lg:justify-between  mt-8 lg:mt-4 mb-10 lg:mb-6`}>
                    <img src={assets.leftarrow} alt="leftarrow" className="mr-[2.22rem] md:mr-4 cursor-pointer" />
                    <div className="items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5  gap-4">
                    {carsoul.map((item , index) => (
                        <div key={index} className="cursor-pointer"> 
                        <img src={item.img} alt="" className="h-52 md:h-28" />
                        <h4 className={`${styles.Caption} mb-1 mt-2 !text-blacky `}>{item.titel}</h4>
                        <p  className={`${styles.Caption}`} >{item.price}</p>
                        </div>
                    ))}
                    </div>
                    <img src={assets.rightarrow} alt="leftarrow" className="ml-[2.22rem] md:ml-4 cursor-pointer" />
                 </div>
                 <p className={`${styles.Subtitle} mt-6 !text-2xl`}>Price options</p>
                 <div>
                    <div className="flex items-center gap-3 my-6">
                        <input type="checkbox" name="price" id="price" className="w-8 h-8 cursor-pointer relative after:absolute after:w-4 after:h-4 transition-all duration-500 ease-in-out after:bg-[#121212] after:checked:opacity-100 after:rounded-full after:opacity-0 before:transition-opacity after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:hover:opacity-50 rounded-full border-2 border-solid border-[#121212] bg-[#D2D2D7] appearance-none " />
                        <label className={`${styles.Subtitle} !text-xl`} htmlFor="price">One time purchase. Price $100</label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" name="subscribe" id="Subscribe" className="w-8 h-8 cursor-pointer relative after:absolute after:w-4 after:h-4 transition-all duration-500 ease-in-out after:bg-[#121212] after:checked:opacity-100 after:rounded-full after:opacity-0 before:transition-opacity after:left-1/2 after:top-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:hover:opacity-50 rounded-full border-2 border-solid border-[#121212] bg-[#D2D2D7] appearance-none " />
                        <label className={`${styles.Subtitle} after:!text-xl`} htmlFor="Subscribe">Subscribe now, and save 25% on this order. </label>
                    </div>
                 </div>
                 <Inbutton name = {leadtoanthorpage ? "Lead You To The Product Page" : "Add to basket"} style ={`!w-full mt-10`} seccuse = {leadtoanthorpage} click= {handleAddToCart} />
        </div>
    </div>
    <div className={`${styles.flexCenter} p-20 ${styles.borderweb} lg:border-b border-y`}>
        <h1 className={`${styles.heading3}`}>You may also like…</h1>
    </div>
    <Suggestproduct />
    </>
  )
}

export default Product