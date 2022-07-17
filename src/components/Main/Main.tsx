import React from "react";
import { Filters, Product } from "../../types";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";

type PropsType = {
  products: Product[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
  cart: string[];
  setCart: (cart: string[]) => void;

};

export default function Main({
  products,
  filters,
  setFilters,
  cart,
  setCart,
}: PropsType) {
  console.log("Main products, filters", products, filters);
  return (
    <main className={styles.main}>
      <Sidebar filters={filters} setFilters={setFilters} />
      <Products products={products} cart={cart} setCart={setCart} />
    </main>
  );
}
