export interface INewProduct {
  product_code: number;
  new_price: number;
}

export interface IProduct {
  code: number;
  name: string;
  cost_price: number;
  sales_price: number;
}

export interface IPack {
  id: number;
  pack_id: number;
  product_id: number;
  qty: number;
}
