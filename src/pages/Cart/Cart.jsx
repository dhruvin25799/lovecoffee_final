import React from "react";
import styles from "./Cart.module.css";
import { CartTotals } from "../../components/CartTotals/CartTotals";
import { CartList } from "../../components/CartList/CartList";

export const Cart = (props) => {
    return (
      <>
        <header className={styles["products-header"]}>
          <div className={styles["banner-text"]}>
            <h1 className={styles["cart-text"]}>Shopping Cart</h1>
          </div>
        </header>
        <main className={styles["cart-main"]}>
          <div className={styles["cart-content"]}>
            <CartList/>
            <CartTotals/>
          </div>
        </main>
      </>
    );
}