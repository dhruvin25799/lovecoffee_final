import React, { useEffect } from "react";
import { WishlistCard } from "../../components/Card/WishlistCard";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useHttp } from "../../hooks/useHttp";
import { deleteFromWishlist } from "../../helpers/deleteFromWishlist";
import { useAuth } from "../../context/auth-context";
import styles from "./Wishlist.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { moveItem } from "../../helpers/moveItem";
export const Wishlist = (props) => {
  const { authState } = useAuth();
  const { sendRequest, error, status, data } = useHttp(deleteFromWishlist);
  const {
    sendRequest: moveRequest,
    error: moveError,
    status: moveStatus,
    data: moveData,
  } = useHttp(moveItem);
  const { wishlist, wishlistDispatch } = useWishlist();
  const { cart, cartDispatch } = useCart();
  const removeFromWishlist = (product) => {
    sendRequest({ token: authState.token, product: product });
  };
  const isInCart = (product) => {
    return cart.cart.find((item) => item._id === product._id);
  };
  const moveFromWishlistToCart = (product) => {
    moveRequest({token: authState.token, product: product, action: "WISHLIST_TO_CART"})
  };
  useEffect(() => {
    if (status === "completed") {
      wishlistDispatch({ type: "REMOVE", payload: data });
      toast.success("Item removed from wishlist!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (status === "error") {
      toast.error("Oops! Failed to remove!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [data, wishlistDispatch, status]);
  useEffect(()=>{
    if(moveStatus==="completed"){
      cartDispatch({ type: "ADD", payload: moveData.cart });
      wishlistDispatch({ type: "REMOVE", payload: moveData.wishlist });
      toast.success("Item moved from wishlist to cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  },[cartDispatch, wishlistDispatch, moveData, moveStatus])
  return (
    <>
      <header className={styles["products-header"]}>
        <div className={styles["banner-text"]}>
          <h1 className={styles["cart-text"]}>Wishlist</h1>
        </div>
        <div className={`${styles["banner-products"]} ${styles["wishlist"]}`}>
          <Link to="/">
            Home{"\u00A0"}
            {"\u00A0"}/
          </Link>
          <a>Wishlist</a>
        </div>
      </header>
      <main className={styles["wishlist-main"]}>
        <div className={styles["wishlist-header"]}>
          <p>Your Products Wishlist</p>
        </div>
        <hr />
        <div className={styles["wishlist-content"]}>
          {wishlist.map((item) => (
            <WishlistCard
              key={item._id}
              product={item}
              removeFromWishlist={removeFromWishlist}
              inCart={isInCart(item)}
              moveFromWishlistToCart={moveFromWishlistToCart}
            />
          ))}
        </div>
        <ToastContainer />
      </main>
    </>
  );
};
