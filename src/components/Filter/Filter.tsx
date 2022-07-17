import React from "react";
import { Filters } from "../../types";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import s from "./Filter.module.css";

type FilterValuesType = {
  values?: string[];
  range?: { from: number; to: number };
};

type FilterPropsType = {
  criteria: string;
  title: string;
  type: "checkboxes" | "rangeSlider" | "dropDown";
  filters: Filters;
  setFilter: (filters: Filters) => void;

};

type strNumArr = string[] | number[];

export default function Filter({
  criteria,
  title,
  type,
  filters,
  setFilter,
}: // values,
// state,
// updateFilters,
// setState,
FilterPropsType) {
  function updateFilter(active: string[]) {
    const resultFilter = { ...filters };
    resultFilter[criteria].active = [...(active || [])];
    setFilter(resultFilter);
    // alert(active[0]);
  }

  // console.log("Filter:", criteria, type, state);
  console.log("Filter:", title, type, filters);

  // console.log(criteria);
  // console.log(state.data[0]);
  // console.log(state.data[0][criteria as keyof Product]);

  // const tempArr: strNumArr = [];

  // const values: strNumArr = state.data.reduce(
  //   (acc: strNumArr, val: Product): strNumArr => {
  //     return acc.includes(val[criteria as keyof Product] as never) //  WTF?!!
  //       ? acc
  //       : ([...acc, val[criteria as keyof Product]] as strNumArr);
  //   },
  //   tempArr as strNumArr
  // );

  // console.log(values);
  // function addToCart(productId: number): void {
  //   setState({ ...state, cart: [...state.cart, productId] });
  // }

  // function removeFromCart(productId: number): void {
  //   // const cart = state.cart;
  //   setState({ ...state, cart: state.cart.filter((id) => id != productId) });
  // }

  // -criteria,
  // -title,
  // type,
  // -filters,
  // setFilter,

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
