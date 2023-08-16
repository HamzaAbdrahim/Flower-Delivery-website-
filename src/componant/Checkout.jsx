import { Outlet } from "react-router-dom"
import Ordersumrey from "./Ordersumrey"
import Chosenway from "./Chosenway"
import styles from "../style"

const Checkout = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2`}>
      <div  className={`p-10 px-20 ${styles.borderweb} border-r `}>
      <Chosenway />
      <Outlet />
      </div>
      <Ordersumrey styles = "order-1 lg:order-2" />
    </div>
  )
}

export default Checkout