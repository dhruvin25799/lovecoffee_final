import React from "react";
import { useToggle } from "../../hooks/useToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSliders } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filters.module.css";
import {Button} from "../Button/Button";

export const Filters = (props) => {
  const { toggle, toggleOption } = useToggle(false);
  const {filterState, filterDispatch} = props;
  return (
    <>
      <div className={styles["mobile-filters"]}>
        <button onClick={toggleOption}>
          <FontAwesomeIcon icon={faSliders} />
          Show Filters
        </button>
        {/* <div className={styles["mobile-dropdown"]}>
                <select
                  name="sorting"
                  id="sorting"
                  className={styles["sorting-select"]}
                >
                  <option value="ASC">Low to High</option>
                  <option value="DESC">High to Low</option>
                </select>
              </div> */}
      </div>
      <aside
        className={`${styles["product-filters"]} ${
          toggle && styles["display"]
        }`}
      >
        <div className={`${styles["filters"]} ${styles["filter-header"]}`}>
          <p>Filters</p>
          <button
            className={styles["clear-filter-link"]}
            onClick={() => filterDispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
          {toggle && (
            <FontAwesomeIcon icon={faXmark} size="2x" onClick={toggleOption} />
          )}
        </div>
        <div className={styles["filters"]}>
          <p>Price</p>
          <div className={styles["slider"]}>
            <input
              type="range"
              min="0"
              max="2000"
              value={filterState.price}
              step="100"
              onChange={(e) =>
                filterDispatch({ type: "PRICE", payload: e.target.value })
              }
            />
            <p id="rangeValue">{filterState.price}</p>
          </div>
        </div>
        <div className={styles["filters"]}>
          <p>Filters</p>
          <div>
            <label>
              <input
                type="checkbox"
                checked={filterState.showOutOfStock}
                onChange={() => filterDispatch({ type: "TOGGLE_STOCK" })}
              />
              Show Out of Stock
            </label>
          </div>
        </div>
        <div className={styles["filters"]}>
          <p>Category</p>
          <div>
            <label>
              <input
                type="checkbox"
                checked={
                  !filterState.category
                }
                onChange={() =>
                  filterDispatch({
                    type: "CATEGORY",
                    payload: false,
                  })
                }
              />
              All
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={
                  filterState.category &&
                  filterState.category === "Instant Coffee"
                }
                onChange={() =>
                  filterDispatch({
                    type: "CATEGORY",
                    payload: "Instant Coffee",
                  })
                }
              />
              Instant Coffee
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={
                  filterState.category &&
                  filterState.category === "Ground Coffee"
                }
                onChange={() =>
                  filterDispatch({
                    type: "CATEGORY",
                    payload: "Ground Coffee",
                  })
                }
              />
              Ground Coffee
            </label>
          </div>
        </div>
        <div className={styles["filters"]}>
          <p>Rating</p>
          <div>
            <label>
              <input
                type="radio"
                name="ratingSelector"
                checked={filterState.rating === "4"}
                onChange={() =>
                  filterDispatch({ type: "RATING", payload: "4" })
                }
              />
              4 stars and above
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="ratingSelector"
                checked={filterState.rating === "3"}
                onChange={() =>
                  filterDispatch({ type: "RATING", payload: "3" })
                }
              />
              3 stars and above
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="ratingSelector"
                checked={filterState.rating === "2"}
                onChange={() =>
                  filterDispatch({ type: "RATING", payload: "2" })
                }
              />
              2 stars and above
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="ratingSelector"
                checked={filterState.rating === "1"}
                onChange={() =>
                  filterDispatch({ type: "RATING", payload: "1" })
                }
              />
              1 stars and above
            </label>
          </div>
        </div>
        <div className={`${styles["filters"]} ${styles["price"]}`}>
          <p>Sort by</p>
          <div>
            <label>
              <input
                type="radio"
                name="priceSelector"
                checked={filterState.sort && filterState.sort === "ASC"}
                onChange={() =>
                  filterDispatch({ type: "SORT", payload: "ASC" })
                }
              />
              Price - Low to High
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="priceSelector"
                checked={filterState.sort && filterState.sort === "DESC"}
                onChange={() =>
                  filterDispatch({ type: "SORT", payload: "DESC" })
                }
              />
              Price - High to Low
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};
