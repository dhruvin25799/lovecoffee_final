import React from "react";
import styles from "./Signup.module.css";
import {Link} from "react-router-dom";
import {Button} from "../../components/Button/Button";

export const Signup = () => {
    return (
      <>
        <header className={styles["products-header"]}>
          <div className={styles["banner-text"]}>
            <h1 className={styles["cart-text"]}>Your Account</h1>
          </div>
          <div className={`${styles["banner-products"]} ${styles["wishlist"]}`}>
            <Link to="/">
              Home{"\u00A0"}
              {"\u00A0"}/
            </Link>
            <a>Your Account</a>
          </div>
        </header>
        <main className={styles["login-main"]}>
          <div className={styles["login-box"]}>
            <div className={styles["login-header"]}>
              <p>Login</p>
            </div>
            <div className={styles["login-input"]}>
              <div className={styles["input-control"]}>
                <label for="">Email Address</label>
                <input type="email" />
              </div>
              <div className={styles["input-control"]}>
                <label for="">Password</label>
                <input type="password" />
              </div>
            </div>
            <div className={styles["login-extra"]}>
              <div className={styles["input-control-row"]}>
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
            </div>
            <a>Forgot Password?</a>
            <Button isFull={true}>
              Login
            </Button>
          </div>
          <hr />
          <div className={styles["login-change"]}>
            <div className={styles["change-header"]}>
              <p>Register</p>
            </div>
            <div className={styles["login-change-desc"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                culpa inventore praesentium eveniet temporibus, rem fuga iusto
                molestias nisi et modi ipsa tempore quasi corrupti quo ut.
                Minima, quod nesciunt.
              </p>
            </div>
            <div className={styles["login-change-cta"]}>
              <a href="../pages/signup.html">
                <Button isFull={true}>
                  Don't have an account?
                </Button>
              </a>
            </div>
          </div>
        </main>
      </>
    );
}