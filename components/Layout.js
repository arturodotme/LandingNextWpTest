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