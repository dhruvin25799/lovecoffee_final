import React from "react";
import styles from "./CartTotals.module.css";
import { useCart } from "../../context/cart-context";
import { RupeeSign } from "../RupeeSign/RupeeSign";
import {Button} from "../Button/Button";

export const CartTotals = () => {
    const { cart } = useCart();
    return (
      <>
        <div className={styles["cart-checkout-container"]}>
          <div className={styles["cart-checkout"]}>
            <div className={styles["checkout-header"]}>Cart Totals</div>
            <hr />
            <div className={styles["checkout-details"]}>
              <div className={styles["checkout-detail-item"]}>
                <p className={styles["detail-header"]}>Subtotal:</p>
                <p>
                  <RupeeSign/>
                  {+cart.totalAmount}
                </p>
              </div>
              {/* <div className={styles["checkout-detail-item"]}>
                    <p className={styles["detail-header"]}>Discount:</p>
                    <p>
                      <span className={styles["rupees"]}>
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                      </span>
                      -1999
                    </p>
                  </div> */}
              <div className={styles["checkout-detail-item"]}>
                <p className={styles["detail-header"]}>Shipping Charges:</p>
                <p>
                  <RupeeSign/>
                  {+cart.shippingCharges}
                </p>
              </div>

              <hr />
              <div
                className={`${styles["checkout-detail-item"]} ${styles["checkout-final"]}`}
              >
                <p className={styles["detail-header-final"]}>TOTAL AMOUNT:</p>
                <p>
                  <RupeeSign/>
                  {+cart.totalAmount + +cart.shippingCharges}
                </p>
              </div>
              <div
                className={`${styles["checkout-detail-item"]} ${styles["checkout-final"]}`}
              >
                <p className={styles["detail-header-final"]}>ITEMS IN BAG:</p>
                <p>{+cart.totalItems}</p>
              </div>
              <hr />
            </div>

            {/* <p>You have saved 1999 on this order.</p> */}
            <Button
              isFull={true}
              disabled={+cart.totalItems === 0}
            >
              Place Order
            </Button>
          </div>
        </div>
      </>
    );
}