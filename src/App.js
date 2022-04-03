import React from "react";
import './App.css';
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path=":category" element={<Shop />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
