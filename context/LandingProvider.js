import React from 'react'
import { createContext, useState } from "react";
const LandingContext = createContext()

const LandingProvider = ({children}) => {
    const [modal,setModal] = useState(false)

    const handleChangeModal = () => {
        setModal(!modal)
    }

    return (
        <LandingContext.Provider 
        value={{
           modal,
           handleChangeModal
        }}
        >
            {children}
        </LandingContext.Provider>
    )
}
export {
    LandingProvider
};
export default LandingContext
