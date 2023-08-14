import Information from "./Information"
import Ordersumrey from "./Ordersumrey"

const Checkout = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2`}>
      <Information styles = "order-2 lg:order-1" />
      <Ordersumrey styles = "order-1 lg:order-2" />
    </div>
  )
}

export default Checkout