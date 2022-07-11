import React from "react";
import { PropsType } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Catalog.module.css";

export default function Catalog({ state, setState }: PropsType) {
  console.log("cat state:", state);

  function addToCart(productId: number): void {
    setState({ ...state, cart: [...state.cart, productId] });
  }

  function removeFromCart(productId: number): void {
    // const cart = state.cart;
    setState({ ...state, cart: state.cart.filter((id) => id != productId) });
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.productsWrapper}>
        {state.data.map((item) => (
          <div key={item.id}>
            <ProductCard
              inCart={state.cart.includes(item.id)}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              product={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
