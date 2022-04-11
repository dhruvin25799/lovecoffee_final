import React, {createContext, useContext, useEffect, useReducer} from "react";
import { wishlistReducer, initialWishlistState } from "../reducers/wishlistReducer";
import { useAuth } from "./auth-context";
import { useHttp } from "../hooks/useHttp";
import { getWishlistData } from "../helpers/getWishlistData";

const wishlistContext = createContext([]);

const WishlistProvider = ({children}) => {
    const [wishlist, wishlistDispatch] = useReducer(wishlistReducer, initialWishlistState);
    const {authState} = useAuth();
    const {sendRequest, error, status, data} = useHttp(getWishlistData);
    useEffect(()=>{
        if(authState.isLoggedIn === false){
            wishlistDispatch({type : "LOGGED_OUT"});
        }
        if(authState.isLoggedIn === true && authState.token !== ""){
            sendRequest(authState.token)
        }
    },[authState, sendRequest])
    useEffect(()=>{
        if(status==="completed"){
            wishlistDispatch({type: "LOAD_DATA", payload: data});
        }
    },[status, data])
    return <wishlistContext.Provider value={{wishlist, wishlistDispatch}}>{children}</wishlistContext.Provider>
}

const useWishlist = () => useContext(wishlistContext);

export {WishlistProvider, useWishlist};