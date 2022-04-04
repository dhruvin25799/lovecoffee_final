import React from "react";
import styles from "./RupeeSign.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
export const RupeeSign = () => {
    return (
      <span className={styles["rupees"]}>
        <FontAwesomeIcon icon={faIndianRupeeSign} />
      </span>
    );
}