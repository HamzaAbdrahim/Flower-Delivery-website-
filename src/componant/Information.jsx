import assets from "../assets/imges";
import styles from "../style";
import Contantinfo from "./Contantinfo";

const Information = (props) => {
  const handleClick = () => {
    props.show();
  };

  return (
    <>
      <div className={`${styles.Body} bg-secondary py-10 pl-10 pr-28 md:pr-[8.62rem]`}>
        <p>
          Already have an account? <a href="#" onClick={handleClick} className="underline">Log in</a> for faster checkout
        </p>
      </div>
      <Contantinfo />

      <p className={`${styles.borderweb} ${styles.Subtitle} border-y !text-Gray  !border-Gray pt-10 pb-6 my-10 pr-4`}>
        2 Shipping details
      </p>
      <p className={` ${styles.Subtitle} ${styles.borderweb} border-b !text-Gray !border-Gray pb-6  pr-4`}>
        3 Payment
      </p>
    </>
  );
};

export default Information;