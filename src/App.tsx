import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Filters, Product } from "./types";
import Cart from "./components/Cart/Cart";
import { fetchFilters, fetchProducts } from "./controller/mock-fetch";
import Loader from "./components/Loader/Loader";

function App() {
  const filtersInitialState: Filters = {
    category: { values: [], active: [] },
    country: { values: [], active: [] },
    brand: { values: [], active: [] },
    price: {
      from: undefined,
      to: undefined,
      activeFrom: undefined,
      activeTo: undefined,
    },
    year: {
      from: undefined,
      to: undefined,
      activeFrom: undefined,
      activeTo: undefined,
    },
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>(filtersInitialState);
  const [cart, setCart] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchFilters().then((filters) => {
      console.log("FILTERS: ", filters);
      setFilters(filters);
    });
    fetchProducts()
      .then((response) => response.json())
      .then((products) => {
        console.log("app products: ", products);
        setProducts(products as Product[]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchProducts(filters).then((products) => {
      console.log("app products: ", products);
      setProducts(products as Product[]);
      setLoading(false);
    });
  }, [filters]);

  console.log("PRODUCTS", products);

  return (
    <div className="App">
      <Header />
      <Cart count={cart.length} cart={cart} />
      {loading ? (
        <Loader />
      ) : (
        <Main
          products={products}
          filters={filters}
          setFilters={setFilters}
          cart={cart}
          setCart={setCart}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
