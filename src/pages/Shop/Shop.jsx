import React, { useReducer } from "react";
import styles from "./Shop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FilterReducer, initialFilterState } from "../../reducers/FilterReducer";
import { Filters } from "../../components/Filters/Filters";
import { ProductList } from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";

export const Shop = () => {
  const {category} = useParams();
  const [filterState, filterDispatch] = useReducer(
    FilterReducer,
    category ? {...initialFilterState, category: category} : initialFilterState
  );

  return (
    <>
      <header className={styles["products-header"]}>
        <div className={styles["banner-text"]}>
          <h1>Shop</h1>
        </div>
        <div className={styles["banner-products"]}>
          <a href="">
            <FontAwesomeIcon icon={faMugHot} />
            Instant Coffee
          </a>
          <a href="">
            <FontAwesomeIcon icon={faMugSaucer} />
            Ground Coffee
          </a>
        </div>
      </header>
      <main className={styles["product-main"]}>
        <Filters filterState={filterState} filterDispatch={filterDispatch} />
        <section className={styles["product-content"]}>
          <div className={styles["product-cards"]}>
            <ProductList filterState={filterState} />
          </div>
        </section>
      </main>
    </>
  );
};
