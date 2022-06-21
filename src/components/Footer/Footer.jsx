import React from "react";
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles["footer-about"]}>
          <div className={styles["footer-header"]}>
            <h3>Love and Coffee</h3>
          </div>
          <div className={styles["about-desc"]}>
            <p>
              Love and Coffee is the coffee brand you've all been waiting for,
              our brand is dedicated to deliver fresh, un-adulterated and
              blissful coffee to our customers.
            </p>
          </div>
          <div className={styles["about-addr"]}>
            <p>Email : dhruvin.mehta25799@gmail.com</p>
            <p>Mobile : 1234567890</p>
          </div>
        </div>
        <div className={styles["footer-links"]}>
          <div className={styles["footer-header"]}>
            <h3>Useful Links</h3>
          </div>
          <div className={styles["links-links"]}>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
            </ul>
          </div>
        </div>
        <div className={styles["footer-team"]}>
          <div className={styles["footer-header"]}>
            <h3>Our Team</h3>
          </div>
          <div className={styles["team-members"]}>
            <p>
              Made with <FontAwesomeIcon icon={faHeart} /> by Dhruvin Mehta.
            </p>
          </div>
        </div>
      </footer>
    );
}