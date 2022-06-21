import React, { useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { getAllProducts } from "../../helpers/getAllProducts";
import { SortData } from "../../helpers/SortData";
import { FilterData } from "../../helpers/FilterData";
import { ProductCard } from "../Card/ProductCard";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { addToWishlist } from "../../helpers/addToWishlist";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../helpers/addToCart";
export const ProductList = (props) => {
  const { authState } = useAuth();
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();
  const {
    sendRequest: sendToWishlist,
    error: wishlistError,
    status: wishlistStatus,
    data: wishlistData,
  } = useHttp(addToWishlist);
  const {
    sendRequest: sendToCart,
    error: cartError,
    status: cartStatus,
    data: cartData,
  } = useHttp(addToCart);
  const onAddToCart = (product) => {
    sendToCart({ product, token: authState.token });
  };
  const onAddToWishlist = (product) => {
    sendToWishlist({ product, token: authState.token });
  };
  const isInCart = (product) => {
    return cart.cart.find((item) => item._id === product._id);
  };
  const isInWishlist = (product) => {
    return wishlist.find((item) => item._id === product._id);
  };
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
  useEffect(() => {
    if (wishlistStatus === "completed") {
      wishlistDispatch({ type: "ADD", payload: wishlistData });
      toast.success("Item added to wishlist!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (wishlistStatus === "error") {
      toast.error("Oops! Failed to add, try again!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [wishlistStatus, wishlistDispatch, wishlistData]);
  useEffect(() => {
    if (cartStatus === "completed") {
      cartDispatch({ type: "ADD", payload: cartData });
      toast.success("Item added to cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (cartStatus === "error") {
      toast.error("Oops! Failed to add, try again!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [cartStatus, cartDispatch, cartData]);
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
          onAddToCart={onAddToCart}
          inCart={isInCart(product)}
          onAddToWishlist={onAddToWishlist}
          inWishlist={isInWishlist(product)}
        />
      ))}
    </>
  );
};
