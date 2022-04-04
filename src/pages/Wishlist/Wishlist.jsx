import React from "react";
import { WishlistCard } from "../../components/Card/WishlistCard";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import styles from "./Wishlist.module.css";
import {Link} from "react-router-dom"
export const Wishlist = (props) => {
  const {wishlist, wishlistDispatch} = useWishlist();
  const {cart, cartDispatch} = useCart();
  const removeFromWishlist = (product) => {
    wishlistDispatch({type: "REMOVE", payload: product});
  }
  const isInCart = (product) => {
    return cart.cart.find((item) => item._id === product._id);
  };
  const moveFromWishlistToCart = (product) => {
    cartDispatch({type: "ADD", payload: product});
    wishlistDispatch({type: "REMOVE", payload: product});
  }
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
          {wishlist.map(item => <WishlistCard key={item._id} product={item} removeFromWishlist={removeFromWishlist}
            inCart={isInCart(item)}
            moveFromWishlistToCart={moveFromWishlistToCart}
          />)}
          </div>
        </main>
      </>
    );
}