import styles from '../style'

const Submit = (prop) => {
  return (
    <input type="submit" value={prop.value} className={`${styles.button} ${prop.style} h-[3.5rem] w-full px-14 cursor-pointer bg-blacky ${styles.flexCenter} text-white`} />
  )
}

export default Submit