import { createContext, useState } from "react"


export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [fruit, setFruit] = useState('Ninguna.')

    return (
        <UserContext.Provider value={{fruit, setFruit}}>
            {children}
        </UserContext.Provider>
    )
}