import React from "react";
import styles from "./ProductCard.module.css";
import {RupeeSign} from "../RupeeSign/RupeeSign"
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
export const ProductCard = (props) => {
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
              <RupeeSign/>
              {+props.product.price -
                (+props.product.price * +props.product.discount) / 100}
              <span className={styles["strikethrough"]}>
                <RupeeSign/>
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
                onClick={() => props.onAddToCart(props.product)}
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
                onClick={() => props.onAddToWishlist(props.product)}
              >
                Add to wishlist
              </Button>
            )}
          </div>
        </div>
      </div>
    );
}