import React, { useState } from "react";
import styles from "./CartTotals.module.css";
import { useCart } from "../../context/cart-context";
import { RupeeSign } from "../RupeeSign/RupeeSign";
import { Button } from "../Button/Button";
import { useAddress } from "../../context/address-context";
import { AddressCard } from "../Card/AddressCard";

export const CartTotals = () => {
  const { cart } = useCart();
  const { address } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState(
    address[0] ? address[0] : null
  );
  const selectAddressHandler = (e) => {
    setSelectedAddress(address.find((item) => item._id === e.target.value));
  };
  console.log(+cart.totalItems === 0 && selectedAddress === null);
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
                <RupeeSign />
                {+cart.totalAmount}
              </p>
            </div>
            <div className={styles["checkout-detail-item"]}>
              <p className={styles["detail-header"]}>Shipping Charges:</p>
              <p>
                <RupeeSign />
                {+cart.shippingCharges}
              </p>
            </div>
            <hr />
            <div
              className={`${styles["checkout-detail-item"]} ${styles["checkout-final"]}`}
            >
              <p className={styles["detail-header-final"]}>TOTAL AMOUNT:</p>
              <p>
                <RupeeSign />
                {+cart.totalAmount + +cart.shippingCharges}
              </p>
            </div>
            <hr />
          </div>
          <div
            className={`${styles["checkout-detail-item"]} ${styles["checkout-final"]}`}
          >
            <p className={styles["detail-header-final"]}>ITEMS IN BAG:</p>
            <p>{+cart.totalItems}</p>
          </div>
          <hr />
          <div className={styles["checkout-shipping"]}>
            <div>
              <p>SHIPPING TO</p>
              {address.length === 0 ? (
                <Button>Add Shipping Address</Button>
              ) : (
                <select onChange={selectAddressHandler}>
                  {address.map((location) => (
                    <option key={location._id} value={location._id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {selectedAddress && <AddressCard address={selectedAddress} />}
          </div>
          <Button
            isFull={true}
            disabled={
              +cart.totalItems === 0
                ? true
                : selectedAddress === null
                ? true
                : false
            }
          >
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
};
