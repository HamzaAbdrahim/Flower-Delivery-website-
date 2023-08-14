import React from 'react';
import styles from '../style';
import Input from './Input';
import Inbutton from './Inbutton';
import { contact, shopeservise } from '../content';
import assets from '../assets/imges';

const Footer = () => {
  return (
    <footer className={`${styles.borderweb} border-t grid grid-cols-1 xl:grid-cols-2  2xl:grid-cols-4`}>
      <div className={`${styles.borderweb} p-10 border-b lg:border-r xl:border-r`}>
        <p className={`${styles.Body} mb-6`}>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
        <div className='flex flex-col gap-4'>
        <Input placeholder = "Your Email" />
        <Inbutton name = "Remind"/>
        </div>
      </div>
      <div className={`${styles.borderweb} p-10 border-b xl:border-r`}>
        <h2 className={`${styles.heading5} mb-6`}>Contact  Us</h2>
        {contact.map((item , index) => (
          <div key={index} className='mb-6'>
          <p className={`${styles.Caption} mb-2`}>{item.titel}</p>
          <span className={`${styles.links}`}>{item.discrption}</span>
          </div>
        ) )}
        <h2 className={`${styles.heading5} mb-6`}>Follow Us</h2>
        <div className={`${styles.flexitems} gap-8`}>
          <img src={assets.Instagram} alt="Instagram" />
          <img src={assets.Pinterest} alt="Instagram" />
          <img src={assets.Facebook} alt="Instagram" />
          <img src={assets.Twitter} alt="Instagram" />
          <img src={assets.Telegram} alt="Instagram" />
        </div>
      </div>
      <div className={`${styles.borderweb} p-10 border-b lg:border-r`}>
      <h2 className={`${styles.heading5} mb-6`}>Shop</h2>
      {shopeservise.map((item , index) => (
        <div key={index}>
          <span className={`${styles.links}`}><a href="#">{item.shop}</a></span>
        </div>
      ))}
      <h2 className={`${styles.heading5} my-6`}>Service</h2>
      <div>
        <span className='mb-1'><a href="#">Flower Subcription</a></span>
        <span className='block'><a href="#">Wedding & Event Decor</a></span>
      </div>
      </div>
      <div className={`p-10`}>
      <h2 className={`${styles.heading5} mb-6`}>About Us</h2>
      <ul className='mb-6'>
        <li className={`${styles.links}`}>Our story</li>
        <li className={`${styles.links}`}>Blog</li>
      </ul>
      <ul>
        <li className={`${styles.links}`}>Shipping & returns</li>
        <li className={`${styles.links}`}>Terms & conditions</li>
        <li className={`${styles.links}`}>Privacy policy</li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;