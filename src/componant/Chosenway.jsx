import { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/imges";

const Chosenway = () => {
  const [activeTab, setActiveTab] = useState(""); // State to keep track of the active tab

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="inline-flex gap-3 mb-10">
      <Link to="/checkout">
        <p
          className={`inline-flex gap-2 text-Gray cursor-pointer ${
            activeTab === "information" ? "!text-blacky" : ""
          }`}
          onClick={() => handleTabClick("information")}
        >
          Information <img src={assets.Vector} alt="arwo" />
        </p>
      </Link>
      <Link to="shipping">
        <p
          className={`inline-flex gap-2 text-Gray cursor-pointer ${
            activeTab === "shipping" ? "!text-blacky" : ""
          }`}
          onClick={() => handleTabClick("shipping")}
        >
          Shipping <img src={assets.Vector} alt="arwo" />
        </p>
      </Link>
      <Link to="payment">
        <p
          className={`inline-flex gap-2 text-Gray cursor-pointer ${
            activeTab === "payment" ? "!text-blacky" : ""
          }`}
          onClick={() => handleTabClick("payment")}
        >
          Payment <img src={assets.Vector} alt="arwo" />
        </p>
      </Link>
    </div>
  );
};

export default Chosenway;