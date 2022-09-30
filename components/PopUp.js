import React from "react";
import { useState,useEffect,useRef } from "react";
import useLanding from "../hooks/useLanding";
import styles from "../styles/PopUp.module.css";

const PopUp = ({ post }) => {
	const { handleChangeModal } = useLanding();
	const [setEmail] = useState("");
	let menuRef = useRef();

  useEffect(() => {
    let handler = e => {
      if(!menuRef.current.contains(e.target)){
        handleChangeModal();
      }
    };
    document.addEventListener("mousedown", handler)

    return()=> {
      document.removeEventListener("mousedown", handler)
    }
  })
  
	const handleGetCupon = (e) => {
		e.preventDefault();
		handleChangeModal();
		window.open(post.urlBtn, "_blank", "noopener,noreferrer");
	};
  
	return (
		<div ref={menuRef}>
			<div className={styles.closeButton}>
				<button onClick={handleChangeModal}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						fill="currentColor"
						className="bi bi-x-circle"
						viewBox="0 0 16 16"
					>
						{" "}
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
					</svg>
				</button>
			</div>
			<div className={styles.contenedor}>
				<h2 className={styles.title}>
					Grab your cupon for 50% OFF the Healthy Home Chef Master Program today
				</h2>

				<form onSubmit={handleGetCupon} className={styles.formCupon}>
					<input
						className={styles.email}
						type="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="submit"
						className={styles.boton}
						value="Get My Cupon"
					></input>
				</form>

				<p className={styles.privacy}>
					Privacy Policy: We hate spam and promise to keep your email address
					safe
				</p>
			</div>
		</div>
	);
};

export default PopUp;
