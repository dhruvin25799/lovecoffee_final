import React from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Register } from "../../components/Register/Register";
import { Login } from "../../components/Login/Login";
import { useToggle } from "../../hooks/useToggle";
export const Signup = () => {
  const { toggle, toggleOption } = useToggle(true);
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
        {toggle ? <Register toggleOption={toggleOption} /> : <Login />}
        <hr />
        <div className={styles["login-change"]}>
          <div className={styles["change-header"]}>
            <p>{toggle ? "Login" : "Register"}</p>
          </div>
          <div className={styles["login-change-desc"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa
              inventore praesentium eveniet temporibus, rem fuga iusto molestias
              nisi et modi ipsa tempore quasi corrupti quo ut. Minima, quod
              nesciunt.
            </p>
          </div>
          <div className={styles["login-change-cta"]}>
            <Button isFull={true} onClick={toggleOption}>
              {toggle ? "Already have one?" : "Don't have an account?"}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
