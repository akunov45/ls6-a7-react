import { createContext, useState } from "react"

export const APPCONTEXT = createContext()
// Деструктуризация
const { Provider, Consumer } = APPCONTEXT
// useContext

const AppContext = ({ children }) => {
    const [cartData, setCartData] = useState([])

    const value = {
        cartData,
        setCartData 
    }

    return (
        <Provider value={value}>{children}</Provider>
    )
}

export default AppContext