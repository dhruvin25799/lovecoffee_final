import React, {createContext, useContext, useReducer, useEffect} from "react";
import { cartReducer, cartInitialState } from "../reducers/CartReducer";
import { useAuth } from "./auth-context";
import { useHttp } from "../hooks/useHttp";
import { getCartData } from "../helpers/getCartData";
const cartContext = createContext({});

const CartProvider = ({children}) => {
    const [cart, cartDispatch] = useReducer(cartReducer, cartInitialState);
    const { authState } = useAuth();
    const { sendRequest, error, status, data } = useHttp(getCartData);
    useEffect(() => {
      if (authState.isLoggedIn === false) {
        cartDispatch({ type: "LOGGED_OUT" });
      }
      if (authState.isLoggedIn === true && authState.token !== "") {
        sendRequest(authState.token);
      }
    }, [authState, sendRequest]);
    useEffect(() => {
      if (status === "completed") {
        cartDispatch({ type: "LOAD_DATA", payload: data });
      }
    }, [status, data]);
    return <cartContext.Provider value={{cart, cartDispatch}}>{children}</cartContext.Provider>
}

const useCart = () => useContext(cartContext);

export {CartProvider, useCart}

