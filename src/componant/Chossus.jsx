import { choose_us } from "../content"
import styles from "../style"

const Chossus = () => {
  return (
    <div className= {`${styles.borderweb} border-b grid grid-cols-1 lg:grid-cols-2 items-start`}>
    <div className={`p-20`}>
<h1 className={`${styles.heading2}`}>Why choose us ?</h1>
    </div>
    <div className={` ${styles.borderweb} border-t lg:border-l  `}>
        {choose_us.map(item => (
            <div key={item.id} className={`${styles.padding} ${styles.borderweb} ${item.id === choose_us.length ? "" : "border-b"}`}>
                <h1 className={`${styles.heading3} mb-4 `}>{item.titel}</h1>
                <p className={`${styles.Body} max-w-[32rem]`}>{item.pargraf}</p>
            </div>
        ))}
    </div>
</div>
  )
}

export default Chossus