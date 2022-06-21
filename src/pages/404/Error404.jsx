import React from "react";
import styles from "./Error404.module.css";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <>
      <section className={styles["main-404"]}>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_nngb70wk.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          autoplay
          hover
        ></lottie-player>
        <h1>404 Not Found</h1>
        <h1>The page you're looking for does not exist</h1>
        <Link to="/">
          <Button>Return Home?</Button>
        </Link>
      </section>
    </>
  );
};
