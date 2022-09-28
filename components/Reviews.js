import React from 'react'
import styles from '../styles/Reviews.module.css'
import { useEffect } from 'react'
const Reviews = ({post}) => {
  const starImg = post.imagenResenas.sourceUrl
  console.log(post)

  useEffect (() => {
    const container = document.querySelector('#stars');
    const container1 = document.querySelector('#stars1');
    for (let i = 0; i < 5; i++) {
      const htmlImage = document.createElement("img");
      const htmlImage1 = document.createElement("img");
      htmlImage.src = starImg;
      htmlImage1.src = starImg;
      container.appendChild(htmlImage);
      container1.appendChild(htmlImage1);
    }
  },[]);
  return (
    <>

    <div className={styles.container}>
    <h2 className={styles.reviewtitle}>{post.tituloResenas}</h2>
    <div className={styles.containerreviews}>
        <section className={styles.review}>
            <div id="stars"></div>
            <p>{post.textoResena1}</p>
            <p>{post.textoPesona1}</p>
        </section>
        <section className={styles.review}>
            <div id="stars1"></div>
            <p>{post.texoResena2}</p>
            <p>{post.textoPersona2}</p>
        </section>
    </div>
    </div>
    </>
  )
}

export default Reviews