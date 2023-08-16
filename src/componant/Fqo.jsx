import { useState } from "react";
import { faqs } from "../content/index";
import styles from "../style";
import classNames from "classnames";
import assets from "../assets/imges";

const Fqo = () => {
  const [toggle, setToggle] = useState(null);

  function handleClick(index) {
    setToggle(toggle === index ? null : index);
  }

  return (
    <>
      <div className={`${styles.flexCenter} md:p-20 bg-[#F5F5F7] ${styles.borderweb} border-y my-5`}>
        <div className={`border p-10 md:p-20 bg-white ${styles.borderweb}`}>
          <h1 className={`${styles.heading2} text-center mb-10`}>Subscription FAQ</h1>
          {faqs.map((item, index) => (
            <div className={`max-w-[44rem] ${styles.borderweb} overflow-hidden border-b py-6`} key={item.id}>
              <div
                className={classNames(styles.flexBetween, "duration-500", "ease-out", "cursor-pointer")}
                onClick={() => handleClick(index)}
              >
                <h1 className={`${styles.heading4}`}>{item.question}</h1>
                <img
                  src={assets.fqoarow}
                  alt="arrow"
                  className={classNames("duration-500", { "-rotate-90": toggle === index })}
                />
              </div>
              <div className={classNames(styles.flexBetween, { hidden: toggle !== index })}>
                <h1 className={`${styles.Body} mt-4 opacity-90`}>{item.answer}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fqo;