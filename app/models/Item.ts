import { Price } from "./Price";

export interface Item {
  id: String;
  title: String;
  price: Price;
  picture: String;
  condition: String;
  location?: String;
  freeShipping: Boolean;
  soldQuantity?: Number;
  description?: String;
}
