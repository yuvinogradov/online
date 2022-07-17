import React from "react";
import { Filters } from "../../types";
// import { PropsType } from "../../types";
import Filter from "../Filter/Filter";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import styles from "./Sidebar.module.css";

type PropsType = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

// export default function Sidebar({ state, setState }: PropsType) {
export default function Sidebar({ filters, setFilters }: PropsType) {
  console.log("====.... FILTERS ....====> ", filters);
  function updateFilters() {
    console.log("hello");
  }

  return (
    <div className={styles.sidebar}>
      Фильтры
      <Filter
        criteria="brand"
        title="Производитель"
        type="checkboxes"
        // options={filters.brand}
        filters={filters}
        setFilter={setFilters}

        // setState={setState}
        // state={state}
      />
      {/* <FilterCheckbox
        updateFilter={() => {
          return;
        }}
        values={filters.brand.values}
      /> */}
    </div>
  );
}
