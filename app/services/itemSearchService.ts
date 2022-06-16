import { ProductResponse } from "../models/ProductResponse";
import axios from "axios";
import {
  createOkResponse,
  createErrorResponse,
} from "../utils/responseBuilder";

export class ItemSearchService {
  constructor() {}
  getById = async (id: string) => {
    const itemUrl = `https://api.mercadolibre.com/items/${id}`;
    const descriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;
    try {
      const [itemResponse, descriptionResponse] = await Promise.all([
        axios.get(itemUrl),
        axios.get(descriptionUrl),
      ]);
      const productInfo = itemResponse.data;
      const { plain_text: description } = descriptionResponse.data;
      const product: ProductResponse = {
        author: {
          name: "Ivan Dario",
          lastName: "Gomez",
        },
        item: {
          id: productInfo.id,
          title: productInfo.title,
          price: {
            currency: productInfo.currency_id,
            amount: productInfo.price,
            decimals: 0,
          },
          picture: productInfo.pictures[0].url,
          condition: productInfo.condition,
          free_shipping: productInfo.shipping.free_shipping,
          sold_quantity: productInfo.sold_quantity,
          description,
        },
      };
      return createOkResponse(product);
    } catch (error) {
      return createErrorResponse(error);
    }
  };
}
