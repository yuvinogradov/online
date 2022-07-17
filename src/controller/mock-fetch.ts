import { Filters } from "./../types/index";
// const users = [
//   { id: 0, name: "Hank", organization: 0 },
//   { id: 1, name: "Abagnale", organization: 0 },
//   { id: 3, name: "Frank", organization: 1 },
//   { id: 4, name: "Abbey", organization: 1 },
//   { id: 5, name: "Edward", organization: 2 },
//   { id: 6, name: "Abel", organization: 2 },
//   { id: 7, name: "Reuben", organization: 0 },
//   { id: 8, name: "Abelson", organization: 1 },
// ];

import { Product2 } from "../types";

// const organizations = [
//   { id: 0, name: "Accounting department" },
//   { id: 1, name: "Development department" },
//   { id: 2, name: "Sales department" },
// ];

// const data = {
//   "/users": users,
//   "/organizations": organizations,
// };

// function delay(val) {
//   return new Promise((res, rej) => setTimeout(val ? res : rej, 500, val));
// }

// export function mockFetch(url) {
//   const payload = data[url];

//   return delay(payload);
// }

export async function fetchProducts(filters: Filters | void) {
  if (filters) {
    console.log("with filters");
    console.log(filters);
    const resp = await fetch("./data2.json");
    const data = await resp.json();
    const result = data
      .filter(
        (product: Product2): boolean | undefined =>
          filters.brand.active?.includes(product.properties.brand) ||
          !filters.brand.active ||
          !filters.brand.active.length
      )
      .filter(
        (product: Product2): boolean | undefined =>
          filters.category.active?.includes(product.properties.category) ||
          !filters.category.active ||
          !filters.category.active.length
      )
      .filter(
        (product: Product2): boolean | undefined =>
          filters.country.active?.includes(product.properties.country) ||
          !filters.country.active ||
          !filters.country.active.length
      )
      .filter((product: Product2): boolean | undefined => {
        const price = product.properties.price;
        return (
          (filters.price.from || 0) <= price &&
          (filters.price.to || +Infinity) >= price
        );
      })
      .filter((product: Product2): boolean | undefined => {
        const value = product.properties.year;
        return (
          (filters.year.from || 0) <= value &&
          (filters.year.to || +Infinity) >= value
        );
      });

    console.log("-----------------------> ", result);
    return result;
  } else {
    console.log("without filters");
    const resp = await fetch("./data2.json");
    return resp;
  }
}

export async function fetchFilters() {
  const resp = await fetch("./data2.json");
  const data = await resp.json();
  // console.log("==== DATA json :===> ", data);
  // console.log(" properties : ", data[0].properties);
  const result = data.reduce(
    (acc: Filters, val: Product2) => {
      const { category, country, brand, price, year } = val.properties;
      return {
        category: {
          values: acc?.category?.values?.includes(category)
            ? [...acc.category.values]
            : [...(acc.category.values || []), category],
        },
        country: {
          values: acc?.country?.values?.includes(country)
            ? [...acc.country.values]
            : [...(acc.country.values || []), country],
        },
        brand: {
          values: acc?.brand?.values?.includes(brand)
            ? [...acc.brand.values]
            : [...(acc.brand.values || []), brand],
        },
        price: {
          from: (acc.price.from || price) < price ? acc.price.from : price,
          to: (acc.price.to || price) > price ? acc.price.to : price,
        },
        year: {
          from: (acc.year.from || year) < year ? acc.year.from : year,
          to: (acc.year.to || year) > year ? acc.year.to : year,
        },
      };

      // acc.category.values = acc.category.values.includes(
      //   val.properties.category
      // )
      //   ? [...acc.category.values]
      //   : [...acc.category.values, val.properties.category];
    },
    {
      category: { values: [] },
      country: { values: [] },
      price: { from: undefined, to: undefined },
      year: { from: undefined, to: undefined },
      // наличие
      // новинка
      brand: { values: [] },
    }
  );

  console.log("============  FILTER ====> ", result);
  return result;
}

export {};
