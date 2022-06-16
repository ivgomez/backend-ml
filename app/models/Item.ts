import { Price } from "./Price";

export interface Item {
  id: String;
  title: String;
  price: Price;
  picture: String;
  condition: String;
  free_shipping: Boolean;
  sold_quantity?: Number;
  description?: String;
}
