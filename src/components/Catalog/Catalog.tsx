import React from "react";
import { PropsType } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Catalog.module.css";

export default function Catalog({ state }: PropsType) {
  console.log("cat state:", state);
  return (
    <div className={styles.catalog}>
      Catalog
      <div className={styles.productsWrapper}>
        {state.data.map((item) => (
          <div key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
