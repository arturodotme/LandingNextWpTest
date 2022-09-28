import React from 'react'
import Head from 'next/head'
import Modal from 'react-modal'
import useLanding from '../hooks/useLanding'
import PopUp from './PopUp'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
    background: '#fff',
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	},
};
Modal.setAppElement("#__next");


const Layout = ({post,children}) => {
  const {modal} = useLanding()
  return (
    <>
        <Head>
            <title>Landing Page Next-WP</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <main>{children}</main>
        {modal && (
				<Modal
				isOpen={modal}
				style = {customStyles}
        >
					<PopUp
          post = {post}/>
				</Modal>
			)}
    </>
  )
}

export default Layout