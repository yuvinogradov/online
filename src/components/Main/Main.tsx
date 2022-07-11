import React from "react";
import Catalog from "../Catalog/Catalog";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";
import { PropsType, State } from "../../types";

export default function Main({state}: PropsType) {
  
  return (
    <main className={styles.main}>
      <Sidebar />
      <Catalog state={state} />
    </main>
  );
}
