import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    
    const[cartList,setCartList]=useState([])
    
    const addItem=(product)=>{
        setCartList( ...cartList, product )
    }
    
    return(
        <CartContext.Provider value={[
            cartList,
            addItem
        ]}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext=()=> useContext(CartContext)

export default CartContextProvider