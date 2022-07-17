import { Checkbox, FormControlLabel } from "@mui/material";
import React, { SyntheticEvent } from "react";
import s from "./FilterCheckbox.module.css";

type FilterPropsType = {
  values: string[];
  active: string[];
  updateFilter: (active: string[]) => void;
};

export default function FilterCheckbox({
  values,
  active,
  updateFilter,
}: FilterPropsType) {
  console.log("Filter:", values);

  function handleChange(e: SyntheticEvent): void {
    console.log((e.target as HTMLInputElement).checked);
    console.log((e.target as HTMLInputElement).value);
    console.log("active", active);
    const resArr = [...(active || [])];
    if ((e.target as HTMLInputElement).checked) {
      resArr.push((e.target as HTMLInputElement).value);
      console.log("ACTIVES: ", resArr);
      updateFilter(resArr);
    } else {
      updateFilter(
        resArr.filter((item) => item != (e.target as HTMLInputElement).value)
      );
    }
  }

  console.log("FILTER VALUES active", values, active);

  return (
    <div className={s.filter}>
      {values.map((item) => (
        <FormControlLabel
          key={item}
          value={item}
          control={<Checkbox />}
          label={item}
          labelPlacement="end"
          onChange={handleChange}
          checked={!!active?.includes(item)}
        />
      ))}
    </div>
  );
}
