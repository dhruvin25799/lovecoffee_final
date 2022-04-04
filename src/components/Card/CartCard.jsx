import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { RupeeSign } from "../RupeeSign/RupeeSign";
import styles from "./CartCard.module.css";
import { Button } from "../Button/Button";
export const CartCard = (props) => {
  return (
    <>
      <div className={styles["cart-card"]}>
        <div className={styles["card-image"]}>
          <img
            className={styles["resp-image"]}
            src={props.product.img}
            alt=""
            srcset=""
          />
        </div>
        <div className={styles["card-body"]}>
          <div className={styles["card-header"]}>
            <p className={styles["card-heading"]}>
              {props.product.name} | {props.product.category}
            </p>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() =>
                props.onChange({ type: "DELETE", payload: props.product })
              }
            />
          </div>
          <div className={styles["card-content"]}>
            <div className={`${styles["card-section"]} ${styles["price"]}`}>
              <h3>Price</h3>
              <p>
                <RupeeSign />
                {+props.product.price -
                  (+props.product.price * +props.product.discount) / 100}
              </p>
            </div>
            <hr />
            <div className={`${styles["card-section"]} ${styles["quantity"]}`}>
              <h3>Quantity</h3>
              <div className={styles["quantity-combo"]}>
                <button
                  onClick={() =>
                    props.onChange({ type: "ADD", payload: props.product })
                  }
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={props.product.quantity}
                />
                <button
                  onClick={() =>
                    props.onChange({ type: "REMOVE", payload: props.product })
                  }
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
            </div>
            <hr />
            <div className={`${styles["card-section"]} ${styles["subtotal"]}`}>
              <h3>Subtotal</h3>
              <p>
                <RupeeSign />
                {(+props.product.price -
                  (+props.product.price * +props.product.discount) / 100) *
                  props.product.quantity}
              </p>
            </div>
          </div>
          <div>
            <Button
              isFull={true}
              onClick={() => props.onMoveFromCartToWIshlist(props.product)}
            >
              Move to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
