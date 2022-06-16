import { SearchResponse } from "../models/SearchResponse";
import axios from "axios";
import {
  createOkResponse,
  createErrorResponse,
} from "../utils/responseBuilder";
import { Item } from "../models/Item";
export class SearchService {
  constructor() {}

  get = async (query: string) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    try {
      const apiResponse = await axios.get(url);
      const response = apiResponse.data;
      const searchModel: SearchResponse = {
        author: {
          name: "Ivan Dario",
          lastName: "Gomez",
        },
        categories:
          response.available_filters
            .find((item: any) => item.id === "category")
            ?.values?.sort((a: any, b: any) => a.results - a.results)
            .map((item: any) => item.name) ?? [],

        items: response.results.map(
          (item: any): Item => ({
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: item.price,
              decimals: 0,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
          })
        ),
      };
      return createOkResponse({ result: searchModel });
    } catch (error) {
      return createErrorResponse(error);
    }
  };
}
