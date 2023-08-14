import React from 'react'
import styles from '../style'

const Inbutton = (prop) => {
  return (
    <button onClick={prop.click} className={`w-62 ${prop.style} ${prop.seccuse ? "bg-[#32936F]" : "bg-blacky" } h-14  ${styles.button} text-white`}>{prop.name}</button>
  )
}

export default Inbutton