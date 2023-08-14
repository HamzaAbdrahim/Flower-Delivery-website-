import styles from "../style"

const Input = (prop) => {
  return (
    <input 
            type="text" 
            placeholder={prop.placeholder}
            className={`p-4 border border-solid border-Gray  ${styles.Caption}`} />
  )
}

export default Input