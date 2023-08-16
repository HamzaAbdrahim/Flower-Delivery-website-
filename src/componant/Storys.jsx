import assets from "../assets/imges"
import { storys } from "../content"
import styles from "../style"

const Storys = () => {
  return (
    <div>
        {storys.map((story , index) => (
            <div className={`flex flex-col justify-between ${index == 1 ? "lg:flex-row-reverse" :"lg:flex-row" }`} key={index}>
                <img src={story.img} alt="storyimg" className="w-[52.7rem] h-[52.7rem] object-contain" />
                <div className="p-10 lg:p-20">
                    <h1 className={`${styles.heading3} mb-4`}>{story.titel}</h1>
                    <p className={`${styles.Body} max-w-xl mr-auto`}>{story.discrption}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Storys