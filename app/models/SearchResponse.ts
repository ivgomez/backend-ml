import { BaseResponse } from "./BaseResponse";
import { Item } from "./Item";

export interface SearchResponse extends BaseResponse {
  categories: String[];
  location?: string;
  items: Item[];
}
