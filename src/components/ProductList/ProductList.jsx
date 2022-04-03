import React, { useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { getAllProducts } from "../../helpers/getAllProducts";
import { SortData } from "../../helpers/SortData";
import { FilterData } from "../../helpers/FilterData";
import { ProductCard } from "../Card/ProductCard";
export const ProductList = (props) => {
  const { filterState } = props;
  let ProductList = [];
  const {
    sendRequest,
    data: LoadedProductList,
    error,
    status,
  } = useHttp(getAllProducts);
  const sortedData = SortData(
    LoadedProductList ? LoadedProductList : ProductList,
    filterState.sort
  );
  const filteredData = FilterData(sortedData, filterState);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_gqn2n5rs.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></lottie-player>
    );
  }
  if (
    status === "completed" &&
    (!LoadedProductList || LoadedProductList.length === 0)
  ) {
    return <p>Nothing Found</p>;
  }
  if (status === "error") {
    return <p>{error}</p>;
  }
  return (
    <>
      {filteredData.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </>
  );
};
