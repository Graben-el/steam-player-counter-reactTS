
import { createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [trending, setTrending] = useState([])

    return(
        <AppContext.Provider value={{trending, setTrending}}>
            {children}
        </AppContext.Provider>
    )
}
