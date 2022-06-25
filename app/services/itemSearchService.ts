import "dotenv/config";
import axios from "axios";
import {
  createOkResponse,
  createErrorResponse,
} from "../utils/responseBuilder";
import { productMapper } from "../utils/mapperHelper";

export class ItemSearchService {
  constructor() {}
  getById = async (id: string) => {
    let categories = [];
    const URL = process.env.API_URL;
    const itemUrl = `${URL}/items/${id}`;
    const descriptionUrl = `${URL}/items/${id}/description`;

    try {
      const [itemResponse, descriptionResponse] = await Promise.all([
        axios.get(itemUrl),
        axios.get(descriptionUrl),
      ]);

      const productInfo = itemResponse.data;
      const categoryId: string = productInfo.category_id || "";

      if (categoryId) {
        const categoriesSearchUrl = `${URL}/sites/MLA/search?category=${categoryId}`;
        const apiCategoriesResponse = await axios.get(categoriesSearchUrl);
        categories = apiCategoriesResponse?.data?.filters ?? [];
      }

      const { plain_text: description } = descriptionResponse.data;
      const product = productMapper(productInfo, description, categories);
      return createOkResponse(product);
    } catch (error) {
      return createErrorResponse(error);
    }
  };
}
