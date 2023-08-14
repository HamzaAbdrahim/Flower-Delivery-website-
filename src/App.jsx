import Navbar from "./componant/Navbar"
import Footer from "./componant/Footer"
import Routers from "./routes/Routring"
import styles from "./style"
import { CartProvider } from "./Statecontant"
function App() {
  return (
    <div className={`border ${styles.borderweb}`}>
    <CartProvider>
    <Navbar />
    <Routers />
    <Footer />
    </CartProvider>
    </div>

  )
}

export default App