import styles from '../style'

const Submit = (prop) => {
  return (
    <input type="submit" value={prop.value} className={`${styles.button} ${prop.style} active:pointer-events-none h-[3.5rem] active:bg-blacky w-full px-14 cursor-pointer duration-200 hover:bg-DarkTextColor bg-blacky focus:bg-scondary ${styles.flexCenter} text-white`} />
  )
}

export default Submit