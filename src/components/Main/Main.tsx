import React from "react";
import Catalog from "../Catalog/Catalog";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Main.module.css";
import { PropsType } from "../../types";

export default function Main({ state, setState }: PropsType) {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Catalog setState={setState} state={state} />
    </main>
  );
}
