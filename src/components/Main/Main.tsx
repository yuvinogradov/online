import React from "react";
import { Filters, Product } from "../../types";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";
// import { PropsType } from "../../types";

type PropsType = {
  // state: State;
  products: Product[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
  cart: string[];
  setCart: (cart: string[]) => void;

  // setState: (newState: State) => void;
};

// export default function Main({ state, setState }: PropsType) {
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
      {/* <Sidebar setState={setState} state={state} />
      <Catalog setState={setState} state={state} /> */}
      <Sidebar filters={filters} setFilters={setFilters} />
      <Products products={products} cart={cart} setCart={setCart} />
    </main>
  );
}
