export type Product = {
  id: number;
  sku: string;
  properties: {
    category: string;
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
};

export type FilterItemType = {
  values?: string[] | number[];
  range?: { from: number; to: number };
};

export type FilterValues = {
  values: string[];
  active?: number[];
};

export type FilterRange = {
  from: number | undefined;
  to: number | undefined;
  activeFrom?: number;
  activeTo?: number;
};

export type FilterValuesRange = {
  values?: string[];
  active?: string[];
  from?: number;
  to?: number;
  activeFrom?: number;
  activeTo?: number;
};

export type Filters = {
  [key: string]: FilterValuesRange;
};

export type Callback<T> = (data?: T) => void;
