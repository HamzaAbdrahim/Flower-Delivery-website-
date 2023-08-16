import styles from "../style"

const Inputs = (prop) => {
  return (
    <input 
        type="text" 
        placeholder={prop.placeholder}
        id="numbers"
        className={`p-4 border border-solid w-full border-Gray  ${styles.Caption}`} />
  )
}

export default Inputs