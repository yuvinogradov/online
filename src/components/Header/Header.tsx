import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>Магазин</header>
      <div className={styles.subheader}>
        Интернет-магазин товаров для творчества
      </div>
    </>
  );
}
