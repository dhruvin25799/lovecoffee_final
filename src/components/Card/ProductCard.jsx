import React from "react";
import styles from "./ProductCard.module.css";
import { RupeeSign } from "../RupeeSign/RupeeSign";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
export const ProductCard = (props) => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const isLoggedIn = authState.isLoggedIn;
  return (
    <div className={styles["product-card"]}>
      <div className={styles["card-image"]}>
        <img
          className={styles["resp-image"]}
          src={props.product.img}
          alt=""
          srcSet=""
        />
        {!props.product.inStock && (
          <div className={styles["overlay"]}>
            <p className={styles["out-of-stock"]}>Out of Stock</p>
          </div>
        )}
      </div>
      <div className={styles["card-body"]}>
        <p className={styles["card-header"]}>{props.product.name}</p>
        <div className={styles["card-content"]}>
          <p>{props.product.category}</p>
          <p>
            <RupeeSign />
            {+props.product.price -
              (+props.product.price * +props.product.discount) / 100}
            <span className={styles["strikethrough"]}>
              <RupeeSign />
              {props.product.price}
            </span>
          </p>
          <p>
            <span className={styles["discount"]}>
              {props.product.discount}% off
            </span>
          </p>
        </div>
        <div>Rating: {props.product.rating}</div>
        <div className={styles["card-cta"]}>
          {props.inCart ? (
            <Link to="/cart">
              <Button isFull={true}>Go to Cart</Button>
            </Link>
          ) : (
            <Button
              disabled={props.product.inStock !== true}
              isFull={true}
              onClick={() =>
                isLoggedIn
                  ? props.onAddToCart(props.product)
                  : toast.error("Please log in first!", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                      onClose: () => navigate("/signup", { replace: true }),
                    })
              }
            >
              Add to cart
            </Button>
          )}
          {props.inWishlist ? (
            <Link to="/wishlist">
              <Button isFull={true}>Go to Wishlist</Button>
            </Link>
          ) : (
            <Button
              isFull={true}
              onClick={() =>
                isLoggedIn
                  ? props.onAddToWishlist(props.product)
                  : toast.error("Please log in first!", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                      onClose: () => navigate("/signup", { replace: true }),
                    })
              }
            >
              Add to wishlist
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
