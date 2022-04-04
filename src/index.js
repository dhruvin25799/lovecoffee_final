import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { CartProvider } from './context/cart-context';
import { ScrollToTopProvider } from './providers/ScrollToTop';
import { WishlistProvider } from './context/wishlist-context';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <ScrollToTopProvider>
            <App />
          </ScrollToTopProvider>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);