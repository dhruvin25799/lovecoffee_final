import React, {createContext, useContext, useReducer} from "react";
import { wishlistReducer, initialWishlistState } from "../reducers/wishlistReducer";
const wishlistContext = createContext([]);

const WishlistProvider = ({children}) => {
    const [wishlist, wishlistDispatch] = useReducer(wishlistReducer, initialWishlistState);
    return <wishlistContext.Provider value={{wishlist, wishlistDispatch}}>{children}</wishlistContext.Provider>
}

const useWishlist = () => useContext(wishlistContext);

export {WishlistProvider, useWishlist};