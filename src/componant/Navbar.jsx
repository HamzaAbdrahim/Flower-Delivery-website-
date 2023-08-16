import React, { useState , useEffect } from 'react'
import { navlinks } from '../content'
import styles from '../style'
import assets from '../assets/imges'
import Mobilmenu from './Mobilmenu'
import Shoppingcart from './Shoppingcart'
import Sign from './Sign'
import Singup from './Singup'
import Reasetcode from './Reasetcode'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import {  Cartcontext } from '../Statecontant';

const Navbar = () => {
    const [toogol , settoggol] = useState(false)
    const [show , setshow]=  useState(false)
    const [sing , setsing]=  useState(false)
    const { cart } = useContext(Cartcontext);


    function handelmenu() {
        settoggol(prev => (!prev))
    }
    const handelclose = () => {
        settoggol(false)
    }

    const handelshow = () => {
        setshow(prev => (!prev))
    }
    const handelshowclose = () => {
        setshow(false)
    }

    const handelsing = () => {
        setsing(true)
    }
    const handelsingclose = () => {
        setsing(false)
    }

  return (
    <nav className={`border-b ${styles.borderweb} ${styles.flexBetween}`} >
            <div className={`lg:flex items-center hidden `}>
            {navlinks.slice(0, 2).map((nav , index) => (
                <Link key={index} to={nav.id === "shop" ? "/category" :"/"}> <li key={index}  className={`${styles.links} py-8 w-[11.25rem] cursor-pointer ${styles.flexCenter} border-r ${styles.borderweb}`}>{nav.titel}</li></Link>
            ))}
                </div>
                <div onClick={handelmenu} className={`flex lg:hidden items-center ${styles.links} p-4 cursor-pointer ${styles.flexCenter} border-r ${styles.borderweb}`}>
                    <img src={assets.menumobil}  alt="menumobil" className='w-6 h-6' />
                </div>
                <div className={`lg:flex items-center hidden `}>
            {navlinks.slice(2, 5).map((nav , index) => (
                <li key={index} onClick={nav.id == "cart"?handelshow:handelsing} className={`${styles.links} py-8 w-[11.25rem] cursor-pointer ${styles.flexCenter} border-l ${styles.borderweb}`}>{nav.titel}</li>
            ))}
            
                </div>
                <div onClick={handelshow} className={`flex lg:hidden items-center ${styles.links} p-4 cursor-pointer ${styles.flexCenter} border-l ${styles.borderweb}`}>
                    <img src={assets.bag} 
                    alt="bag" 
                    className='w-6 h-6'
                     />
                </div>
                <Mobilmenu 
                open = {toogol}
                handelclose = {handelclose}
                showsing = {handelsing} />
                <Shoppingcart 
                show = {show}
                handelshowclose = {handelshowclose} 
                />
                <Sign 
                open = {sing}
                handelsingclose = {handelsingclose} />
                <Singup/>
                <Reasetcode />
    </nav>
  )
}

export default Navbar