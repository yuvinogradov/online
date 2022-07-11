import { Button } from "@mui/material";
import React from "react";
import { Product } from "../../types";
import s from "./ProductCard.module.css";
// import img from '../../assets/images/0'

type PropsType = {
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  product: Product;
  inCart: boolean;
};

export default function ProductCard({
  product,
  inCart,
  addToCart,
  removeFromCart,
}: PropsType) {
  function handleClick() {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  }

  return (
    <div className={s.productCard} onClick={handleClick}>
      <div className={s.imageWrap}>
        <img
          className={s.image}
          src={process.env.PUBLIC_URL + product.image}
          alt="Изображение товара"
        />
      </div>
      <div className={s.group1}>
        <div className={s.brand + " " + s.text}>{product.brand}</div>
        <div className={s.sku + " " + s.text}>{product.sku}</div>
      </div>
      <div className={s.name + " " + s.text} title={product.name}>
        {product.name}
      </div>

      <div className={s.group1 + " " + s.group2}>
        <div className={s.country + " " + s.text}>{product.country}</div>
        <div className={s.year + " " + s.text}>{product.year} г.</div>
        <div className={s.price + " " + s.text}>₽ {product.price}</div>
      </div>
      <Button
        variant="contained"
        color={inCart ? "success" : "primary"}
        sx={{
          // backgroundColor: "red",
          margin: "auto 30px 0",
        }}
      >
        {inCart ? "В корзине" : "Добавить в корзину"}
      </Button>
    </div>
  );
}
