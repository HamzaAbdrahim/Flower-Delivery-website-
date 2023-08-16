import { Link } from "react-router-dom";
import assets from "../assets/imges";
import { category } from "../content";
import styles from "../style";

const Category = () => {
  return (
    <div className="flex flex-col xl:flex-row items-start">
      <img src={assets.left_colum} alt="left" />
      <div className="grid grid-cols-1 sm:grid-cols-2 ml-auto">
        {category.map(item => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className={`cursor-pointer bg-cover bg-center bg-no-repeat w-[22.5rem] h-[22.5rem] flex items-end justify-center`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="text-center mb-6">
              <p className={`${styles.heading6} mb-2`}>{item.titel}</p>
              <p className={`${styles.Caption} !text-[#808080] capitalize`}>price {item.price}$</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;