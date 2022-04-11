import React, { useEffect } from "react";
import styles from "./CartList.module.css";
import { CartCard } from "../Card/CartCard";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useHttp } from "../../hooks/useHttp";
import { useAuth } from "../../context/auth-context";
import { deleteFromCart } from "../../helpers/deleteFromCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changeInCart } from "../../helpers/changeInCart";
import { moveItem } from "../../helpers/moveItem";
export const CartList = () => {
  const { cart, cartDispatch } = useCart();
  const { wishlistDispatch, wishlist } = useWishlist();
  const { authState } = useAuth();
  const { sendRequest, data, error, status } = useHttp(deleteFromCart);
  const {
    sendRequest: changeRequest,
    data: changeData,
    error: changeError,
    status: changeStatus,
  } = useHttp(changeInCart);
  const {
    sendRequest: moveRequest,
    data: moveData,
    error: moveError,
    status: moveStatus,
  } = useHttp(moveItem);
  const onMoveFromCartToWIshlist = (product) => {
    moveRequest({token: authState.token, product, action: "CART_TO_WISHLIST"});
  };
  const onRemoveFromCart = (product) => {
    sendRequest({ product, token: authState.token });
  };
  const changeItemQuantity = (product, type) => {
    changeRequest({ product, token: authState.token, type });
  };
  const isInWishlist = (product) => {
    return wishlist.find((item) => item._id === product._id);
  };
  useEffect(() => {
    if (status === "completed") {
      cartDispatch({ type: "REMOVE", payload: data });
      toast.success("Item removed from cart!", {
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
      toast.error("Oops! There was some error!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [status, cartDispatch, data]);
  useEffect(() => {
    if (changeStatus === "completed") {
      cartDispatch({ type: "CHANGE_QUANTITY", payload: changeData });
      toast.success("Quantity updated", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (changeStatus === "error") {
      toast.error("Oops! Try again!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [changeStatus, changeData, cartDispatch]);
  useEffect(()=>{
    if(moveStatus==="completed"){
      wishlistDispatch({ type: "ADD", payload: moveData.wishlist });
      cartDispatch({ type: "REMOVE", payload: moveData.cart });
      toast.success("Item moved from cart to wishlist!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if(moveData==="error"){
      toast.error("Oops! Try again!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  },[wishlistDispatch, cartDispatch, moveStatus, moveData])
  return (
    <>
      <div className={styles["cart-products"]}>
        {cart.cart.map((item) => (
          <CartCard
            key={item._id}
            product={item}
            onChange={changeItemQuantity}
            onMoveFromCartToWIshlist={onMoveFromCartToWIshlist}
            onRemoveFromCart={onRemoveFromCart}
            isInWishlist={isInWishlist(item)}
          />
        ))}
      </div>
      <ToastContainer />
    </>
  );
};
