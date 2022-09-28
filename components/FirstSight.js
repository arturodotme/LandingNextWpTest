import React from 'react'
import Image from 'next/image'
import styles from '../styles/FirstSight.module.css'
import useWpProvider from '../hooks/useWpProvider'
import useLanding from '../hooks/useLanding'

const FirstSight = ({post}) => {
	const {handleChangeModal} = useLanding()
	const imagen = post.imagen1.sourceUrl
	const logo = post.logo.sourceUrl
  return (
		<>
		<div className={styles.logo}>
		<Image layout="fixed" width={170} height={24} src={logo}/>
		</div>
		<section className={styles.maincontainer}>
        <div className={styles.containertext}>
      
				<h2 className={styles.sectiontittle}>{post.titulo1}</h2>
				<h3>{post.texto1}</h3>
				<p className={styles.sectiontext}>
				{post.textoParrafo1}
				</p>
        <button onClick={handleChangeModal}
		className={styles.buttonoff} type="button">
			{post.textoBtn}
		</button>
        </div>

        <div className={styles.containerImagen}>
					<Image className={styles.rounded} width={400} height={400} src={imagen}/>
				</div> 
			</section>
		</>
	);
}

export default FirstSight