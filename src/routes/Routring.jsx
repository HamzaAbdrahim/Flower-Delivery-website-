import { Route , Routes  } from "react-router-dom"
import Hero from "../componant/Hero"
import About from "../componant/About"
import Chossus from "../componant/Chossus"
import Contact from "../componant/Contact"
import Service from "../componant/Service"
import Event from "../componant/Event"
import Reviews from "../componant/Reviews"
import Category from "../componant/Category"
import Product from "../componant/Product"
import Subsciption from "../componant/Subsciption"
import Checkout from "../componant/Checkout"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<div>
        <Hero />
        <About />
        <Chossus />
        <Contact />
        <Service />
        <Event />
        <Reviews />
      </div> }/>
      <Route path = "/category" element = {<Category />} />
      <Route path = "/subsciption" element = {<Subsciption />} />
      <Route path = "/checkout" element = {<Checkout />} />
      <Route path = "/product/:id" element = {<Product />} />
    </Routes>
  )
}

export default Routers