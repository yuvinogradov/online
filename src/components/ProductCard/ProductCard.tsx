import { Button } from "@mui/material";
import React from "react";
import { Product } from "../../types";
import s from "./ProductCard.module.css";

type PropsType = {
  addToCart: (sku: string) => void;
  removeFromCart: (sku: string) => void;
  product: Product;
  inCart: boolean;
};

export default function ProductCard({
  product,
  inCart,
  addToCart,
  removeFromCart,
}: PropsType) {
  function handleClick(): void {
    if (inCart) {
      removeFromCart(product.sku);
    } else {
      addToCart(product.sku);
    }
  }

  return (
    <div className={s.productCard} onClick={handleClick}>
      <div className={s.imageWrap}>
        <img
          className={s.image}
          src={process.env.PUBLIC_URL + product.properties.image}
          alt="Изображение товара"
        />
      </div>
      <div className={s.group1}>
        <div className={s.brand + " " + s.text}>{product.properties.brand}</div>
        <div className={s.sku + " " + s.text}>{product.sku}</div>
      </div>
      <div className={s.name + " " + s.text} title={product.properties.name}>
        {product.properties.name}
      </div>

      <div className={s.group1 + " " + s.group2}>
        <div className={s.country + " " + s.text}>
          {product.properties.country}
        </div>
        <div className={s.year + " " + s.text}>
          {product.properties.year} г.
        </div>
        <div className={s.price + " " + s.text}>
          ₽ {product.properties.price}
        </div>
      </div>
      <div
        className={
          s.stock + " " + (product.properties.stock ? "" : s.outOfStock)
        }
      >
        {product.properties.stock
          ? "Наличие: " + product.properties.stock + " шт."
          : "Нет в наличии"}
      </div>
      <Button
        variant="contained"
        disabled={!product.properties.stock}
        color={inCart ? "success" : "primary"}
        sx={{
          margin: "auto 30px 0",
        }}
      >
        {inCart ? "В корзине" : "Добавить в корзину"}
      </Button>
    </div>
  );
}
