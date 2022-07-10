import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart-context";
import { ScrollToTopProvider } from "./providers/ScrollToTop";
import { WishlistProvider } from "./context/wishlist-context";
import { AuthProvider } from "./context/auth-context";
import { AddressProvider } from "./context/address-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AddressProvider>
          <CartProvider>
            <WishlistProvider>
              <ScrollToTopProvider>
                <App />
              </ScrollToTopProvider>
            </WishlistProvider>
          </CartProvider>
        </AddressProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
