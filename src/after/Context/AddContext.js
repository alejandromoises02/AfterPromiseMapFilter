import React, {useState}  from 'react'

export const AddContext = React.createContext([])

export const AddProvider = ({children}) =>{
    const [agregados, setAgregados] = useState([])

    return <AddContext.Provider value={[agregados, setAgregados]}>
        {children}
    </AddContext.Provider>

}