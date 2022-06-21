import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Signup } from "./pages/Signup/Signup";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Error404 } from "./pages/404/Error404";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />}>
          <Route path=":category" element={<Shop />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
