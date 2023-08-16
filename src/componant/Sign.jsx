import React, { useState} from 'react';
import styles from '../style';
import assets from '../assets/imges';
import Privacy from './Privacy';
import Singup from './Singup';
import Information from './Information';
import { Link } from 'react-router-dom';

const Sign = (prop) => {
  const [toggle, setToggle] = useState(false);

  function handleMenu() {
    setToggle((prevState) => !prevState);
  }
  <Information show = {() => setToggle(true)} />

  const handleClose = () => {
    setToggle(false);
  };


  return (
    <>
      {prop.open && (
        <div className="fixed z-[50] h-screen w-screen bg-scondary opacity-[80%] top-0 left-0"></div>
      )}
      <div
        className={`fixed z-[80] w-full lg:w-[45.125rem] ${
          prop.open ? 'bottom-5' : '-bottom-[60rem]'
        } h-[45rem] pt-20 pb-10 px-20  left-1/2 transform -translate-x-1/2 bg-white shadow-2xl duration-500 ease-in`}
      >
        <h1 className={`${styles.heading2} mb-6`}>Greetings! Welcome to luxury gift shop.</h1>
        <form method="">
          <label htmlFor="numbers" className={`${styles.heading6}`}>
            Use your mobile number to sign up or log in
          </label>
          <input
            type="text"
            placeholder="+380 XX XXX XX XX"
            className={`p-4 border border-solid w-full border-Gray my-4  ${styles.Caption}`}
          />
          <input
            type="submit"
            value="continue"
            className={`${styles.button} h-[3.5rem] w-full px-14 cursor-pointer bg-blacky ${styles.flexCenter} text-white`}
          />
        </form>
        <Link></Link>
        <img src={assets.Or} alt="Or" className="my-6" />
        <p className={`${styles.heading6}`}>Instantly login or sign up via Google</p>
        <div className={`${styles.flexBetween} flex-col lg:flex-row gap-4 mt-3`}>
          <div className={`${styles.flexCenter} gap-2 h-14 w-full border ${styles.borderweb} cursor-pointer`}>
            <img src={assets.Google} alt="Google}" />
            <p className={`${styles.button} `}>continue with google</p>
          </div>
          <div className={`${styles.flexCenter} gap-2 h-14 w-full border ${styles.borderweb} cursor-pointer`}>
            <img src={assets.Apple} alt="Apple" />
            <p className={`${styles.button}`}>continue with appel</p>
          </div>
        </div>
        <p className={`${styles.overline} text-center w-full mt-10 `}>
          Are you not logged in already?{' '}
          <a onClick={handleMenu} className="hover:underline duration-200 ease-linear cursor-pointer ">
            Sign up
          </a>
        </p>
        <Privacy />
      </div>
      <Singup show={toggle} />
    </>
  );
};

export default Sign;