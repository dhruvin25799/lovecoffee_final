import React, {createContext, useContext, useReducer} from "react";
import { cartReducer, cartInitialState } from "../reducers/CartReducer";
const cartContext = createContext({});

const CartProvider = ({children}) => {
    const [cart, cartDispatch] = useReducer(cartReducer, cartInitialState);
    return <cartContext.Provider value={{cart, cartDispatch}}>{children}</cartContext.Provider>
}

const useCart = () => useContext(cartContext);

export {CartProvider, useCart}

