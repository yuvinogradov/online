import React from "react";
import { Product } from "../../types";
// import { PropsType } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

type PropsType = {
  products: Product[];
  cart: string[];
  setCart: (cart: string[]) => void;
};

export default function Products({ products, cart, setCart }: PropsType) {
  console.log("Products Products:", products);

  function addToCart(sku: string): void {
    // setState({ ...state, cart: [...state.cart, productId] });
    setCart([...cart, sku]);
  }

  function removeFromCart(sku: string): void {
    // const cart = state.cart;
    // setState({ ...state, cart: state.cart.filter((id) => id != productId) });
    setCart(cart.filter((id) => id != sku));
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.productsWrapper}>
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard
              inCart={cart.includes(item.sku)}
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
