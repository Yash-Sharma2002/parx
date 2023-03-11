import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContext from "./context/Context";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

import { ProductData } from "./constants/data";

function App() {
  return (
    <>
      <MainContext>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />

            {/* type means the type of products we are showing of same kind */}
            {ProductData.map((item, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={`/shop=${item.url}`}
                  element={<Shop />}
                />
              );
            })}
            <Route exact path="/shop=all" element={<Shop />} />

            {/* id means the id of the product */}
            {ProductData.map((item, index) => {
              return (
                <>
                  {item.products.map((product, idx) => {
                    return (
                      <Route
                        key={idx}
                        exact
                        path={`/shop=${item.url}/product=${product.id}`}
                        element={<Product />}
                      />
                    );
                  })}
                </>
              );
            })}
          </Routes>
        </BrowserRouter>
        <Footer />
      </MainContext>
    </>
  );
}

export default App;
