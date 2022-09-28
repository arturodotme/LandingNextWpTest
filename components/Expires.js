import React from 'react'
import styles from '../styles/Expires.module.css'
import Layout from '../components/Layout'
import useLanding from '../hooks/useLanding'

const Expires = ({post}) => {
    const {handleChangeModal} = useLanding()
  return (
    <Layout>
        <div className={styles.container}>
            <h2>{post.titulo2}</h2>
            <div className={styles.timer}>
                <div>
                    <p>0</p>
                    <span>DAYS</span>
                </div>
                <div>
                    <p>0</p>
                    <span>HOURS</span>
                </div>
                <div>
                    <p>0</p>
                    <span>MINUTES</span>
                </div>
                <div>
                    <p>0</p>
                    <span>SECONDS</span>
                </div>
            </div>
            <p className={styles.date}>{post.texto2}</p>
            <button onClick={handleChangeModal} className={styles.buttonoff} type="button">{post.textoBtn}</button>
        </div>
    </Layout>
	);
}

export default Expires