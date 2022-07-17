import React from "react";
import { Filters } from "../../types";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import s from "./Filter.module.css";


type FilterPropsType = {
  criteria: string;
  title: string;
  type: "checkboxes" | "rangeSlider" | "dropDown";
  filters: Filters;
  setFilter: (filters: Filters) => void;

};


export default function Filter({
  criteria,
  title,
  type,
  filters,
  setFilter,
}: 

FilterPropsType) {
  function updateFilter(active: string[]) {
    const resultFilter = { ...filters };
    resultFilter[criteria].active = [...(active || [])];
    setFilter(resultFilter);
  }

  console.log("Filter:", title, type, filters);

  return (
    <div className={s.filter}>
      <div className={s.title}>{title}</div>
      <div>
        <FilterCheckbox
          values={filters[criteria].values as string[]}
          active={filters[criteria].active as string[]}
          updateFilter={updateFilter}
        />
      </div>
    </div>
  );
}
