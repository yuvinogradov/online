import React from "react";
import { Product } from "../../types";
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
    setCart([...cart, sku]);
  }

  function removeFromCart(sku: string): void {
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
