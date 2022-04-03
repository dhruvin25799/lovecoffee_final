import React from "react";
import styles from "./WishlistCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Button/Button";

export const WishlistCard = (props) => {
    return (
      <>
        <div className={styles["wishlist-card"]}>
          <div className={styles["card-image"]}>
            <img
              className={styles["resp-image"]}
              src={props.product.img}
              alt=""
              srcset=""
            />
            {!props.product.inStock && (
              <div className={styles["overlay"]}>
                <p className={styles["out-of-stock"]}>Out of Stock</p>
              </div>
            )}
          </div>
          <div className={styles["card-body"]}>
            <p className={styles["card-header"]}>
              {props.product.name} | {props.product.category}
            </p>
            <p>
              <span className={styles["rupees"]}>
                <FontAwesomeIcon icon={faIndianRupeeSign} />
              </span>
              {+props.product.price -
                (+props.product.price * +props.product.discount) / 100}
            </p>
          </div>
          <div className={styles["card-cta"]}>
            {props.inCart ? (
              <Button isFull={true} disabled={true}>
                Already in cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  props.moveFromWishlistToCart(props.product);
                }}
                isFull={true}
                disabled={props.product.inStock !== true}
              >
                Move to cart
              </Button>
            )}
            <Button
              isFull={true}
              onClick={() => props.removeFromWishlist(props.product)}
            >
              Remove from wishlist
            </Button>
          </div>
        </div>
      </>
    );
}