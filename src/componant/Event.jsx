import assets from '../assets/imges'
import styles from '../style'

const Event = () => {
  return (
    <div  className={`bg-cover mt-20 lg:mt-0 bg-center bg-no-repeat w-full h-screen after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-blacky flex-col after:opacity-60 relative ${styles.flexCenter}`} style={{ backgroundImage: `url(${assets.Serviceimg})` }}>
      <div className='text-center relative z-10 '>
                <p className={`${styles.overline} !text-[#fff]`}>service</p>
                <h2 className={`${styles.heading2} mb-4 mt-6 !text-[#fff]`}>Wedding & Event Decor</h2>
                <p className={`${styles.Subtitle} max-w-xl mx-auto !text-[#fff]`}>Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                <button className={`${styles.button} mt-16 py-4 !text-[#fff]  px-6 border border-solid border-[#ffffff]`}>Inquire Now</button>
      </div>
    </div>
  )
}

export default Event