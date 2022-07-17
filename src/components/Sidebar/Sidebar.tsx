import React from "react";
import { Filters } from "../../types";
import Filter from "../Filter/Filter";
import styles from "./Sidebar.module.css";

type PropsType = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

export default function Sidebar({ filters, setFilters }: PropsType) {
  console.log("====.... FILTERS ....====> ", filters);

  return (
    <div className={styles.sidebar}>
      Фильтры
      <Filter
        criteria="brand"
        title="Производитель"
        type="checkboxes"
        filters={filters}
        setFilter={setFilters}
      />
    </div>
  );
}
