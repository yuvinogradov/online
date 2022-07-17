import React from "react";
import Logo from "../../assets/images/tail-spin.svg";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loaderWrapper}>
      <img src={Logo} alt="Loading" className={s.loader} />
      <div className={s.loaderText}>Loading...</div>
    </div>
  );
}
