import React from "react";
import styles from "./CartList.module.css";
import { CartCard } from "../Card/CartCard";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
export const CartList = () => {
  const { cart, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const onMoveFromCartToWIshlist = (product) => {
    wishlistDispatch({ type: "ADD", payload: product });
    cartDispatch({ type: "DELETE", payload: product });
  };
  return (
    <>
      <div className={styles["cart-products"]}>
        {cart.cart.map((item) => (
          <CartCard
            key={item._id}
            product={item}
            onChange={cartDispatch}
            onMoveFromCartToWIshlist={onMoveFromCartToWIshlist}
          />
        ))}
      </div>
    </>
  );
};
