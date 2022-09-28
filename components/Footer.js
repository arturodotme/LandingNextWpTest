import React from 'react'
import styles from '../styles/Footer.module.css'
import useLanding from '../hooks/useLanding'

const Footer = ({post}) => {
  const {modal, handleChangeModal} = useLanding()
  return (
    <>
    <div className={styles.container}>
        <div className={styles.text}>
            <h2>{post.textoFooter}</h2>
        </div>
        <div>
            <button onClick={handleChangeModal} className={styles.buttonoff} type="button">{post.textoBtn}</button>           
        </div>
    </div>
    <p className={styles.copy}>© 2021 Eat Real • Privacy Policy • Created with Leadpages</p>
    </>
  )
}

export default Footer