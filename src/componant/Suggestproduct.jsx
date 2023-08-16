import { Link } from "react-router-dom";
import { suggestion } from "../content"
import styles from "../style"


function Suggestproduct() {
    return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
            {suggestion.map((item, index) => (
              <Link
                key={index}
                className={`cursor-pointer bg-cover bg-center bg-no-repeat w-[22.5rem] h-[22.5rem] flex items-end justify-center`}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="text-center mb-6 w-full">
                  <p className={`${styles.heading6} mb-2`}>{item.titel}</p>
                  <p className={`${styles.Caption} !text-[#808080] capitalize`}>{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
      );
}

export default Suggestproduct