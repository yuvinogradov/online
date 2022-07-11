import { Set } from "typescript";

export type Product = {
  id: number;
  sku: string;
  name: string;
  price: number;
  image: string;
  stock: number;
  desc: string;
  year: number;
  new: string;
  brand: string;
  country: string;
};

export type State = {
  data: Array<Product>;
  cart: Array<number | void>;
};

export type PropsType = {
  state: State;
  setState: (newState: State) => void;
};
