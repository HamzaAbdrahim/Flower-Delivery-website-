import { Link } from 'react-router-dom'
import styles from '../style'
import Buttontwo from './Buttontwo'

function Notfound() {
  return (
    <div className={`${styles.flexCenter} flex-col w-full h-[43rem]`}>
        <h1 className={`${styles.heading1}`}>404</h1>
        <h3 className={`${styles.heading3} my-4`}>Ops.. Page not found</h3>
        <Link to="/">
        <Buttontwo name = "Back Home" />
        </Link>
    </div>
  )
}

export default Notfound