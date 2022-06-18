import "dotenv/config";
import axios from "axios";
import {
  createOkResponse,
  createErrorResponse,
} from "../utils/responseBuilder";
import { searchMapper } from "../utils/mapperHelper";
export class SearchService {
  constructor() {}

  get = async (query: string) => {
    const url = `${process.env.API_URL}/sites/MLA/search?q=${query}`;
    try {
      const apiResponse = await axios.get(url);
      const response = apiResponse.data;
      const searchModel = searchMapper(response);
      return createOkResponse({ result: searchModel });
    } catch (error) {
      return createErrorResponse(error);
    }
  };
}
