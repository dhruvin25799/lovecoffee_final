import React from "react";
import styles from "./HomeCard.module.css"
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";
export const HomeCard = (props) => {
    return (
      <div className={styles.card}>
        <div className={styles["card-image"]}>
          <img
            className={styles["resp-image"]}
            src={props.image}
            alt=""
            srcset=""
          />
        </div>
        <div className={styles["card-body"]}>
          <p className={styles["card-header"]}>{props.header}</p>
          <div className={styles["card-content"]}>
            <p>{props.content}</p>
          </div>
          <Link to={`/shop/${props.category}`}>
            <Button isFull={true}>Shop Now</Button>
          </Link>
        </div>
      </div>
    );
}