import React from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useToggle } from "../../hooks/useToggle";
import { Button } from "../Button/Button";
import { useAuth } from "../../context/auth-context";

export const NavBar = () => {
  const { toggle, toggleOption } = useToggle(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { authState, authDispatch } = useAuth();
  return (
    <nav className={styles["nav"]}>
      <ul className={`${styles["menu"]} ${toggle && styles["display"]}`}>
        <li className={`${styles["nav-links"]} ${toggle && styles["display"]}`}>
          <Link to="/" onClick={toggle && toggleOption}>
            Home
          </Link>
          <Link to="/shop" onClick={toggle && toggleOption}>
            Shop
          </Link>
        </li>
        <li className={`${styles["nav-brand"]} ${toggle && styles["display"]}`}>
          <Link to="/" onClick={toggle && toggleOption}>
            <lottie-player
              src="https://assets9.lottiefiles.com/private_files/lf30_FtuMPm.json"
              background="transparent"
              speed="1"
              style={{ width: "100px", height: "100px" }}
              autoplay
              hover
            ></lottie-player>
          </Link>
          {toggle && (
            <FontAwesomeIcon icon={faXmark} size="2x" onClick={toggleOption} />
          )}
        </li>
        <li className={`${styles["nav-cta"]} ${toggle && styles["display"]}`}>
          <Link to="/wishlist" onClick={toggle && toggleOption}>
            <div className={styles["badge-container"]}>
              <FontAwesomeIcon icon={faBookmark} size="2x" />
              <div className={styles["badge"]}>{wishlist.length}</div>
            </div>
          </Link>
          <Link to="/cart" onClick={toggle && toggleOption}>
            <div className={styles["badge-container"]}>
              <FontAwesomeIcon icon={faCartShopping} size="2x" />
              <div className={styles["badge"]}>{cart.totalItems}</div>
            </div>
          </Link>
          {authState.isLoggedIn ? (
            <Button onClick={() => authDispatch({ type: "LOGOUT" })}>
              Logout
            </Button>
          ) : (
            <Link to="/signup" onClick={toggle && toggleOption}>
              <Button>Login/Register</Button>
            </Link>
          )}
        </li>
        {!toggle && (
          <li
            className={`${styles["nav-bars"]} ${toggle && styles["display"]}`}
          >
            <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleOption} />
          </li>
        )}
      </ul>
    </nav>
  );
};
