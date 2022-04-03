import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
  if (props.isFull) {
    return (
      <button
        className={`${styles["btn"]} ${styles["btn-full"]}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
  return (
    <button
      className={styles["btn"]}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
