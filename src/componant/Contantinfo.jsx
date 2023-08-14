import styles from '../style'
import Submit from "./Submit"
import Input from "./Inputs"


const Contantinfo = () => {
  return (
    <>
    <h1 className={`${styles.Subtitle} mt-6 mb-4`}>1 Contact information</h1>
    <form action="" method="post" className='grid grid-cols-1 gap-4'>
        <Input placeholder = "Your Name" />
        <Input placeholder = "Your Email" />
        <Input placeholder = "Your Phone number *" />
        <Submit value = "Continue to shipping" />
    </form>
    </>
  )
}

export default Contantinfo