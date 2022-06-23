import { Author } from "../models/Author";
import { Item } from "../models/Item";
import { ProductResponse } from "../models/ProductResponse";
import { SearchResponse } from "../models/SearchResponse";

const itemsMapper = (items: any[]): Item[] =>
  items.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 0,
    },
    picture: item.thumbnail,
    condition: item.condition,
    location: item.address.state_name,
    freeShipping: item.shipping.free_shipping,
  })) || [];

const categoriesMapper = (categories: any[]): string[] =>
  categories
    .find((item: any) => item.id === "category")
    ?.values?.sort((a: any, b: any) => b.results - a.results)
    .map((item: any) => item.name) ?? [];

const author: Author = {
  name: "Ivan Dario",
  lastName: "Gomez",
};

export const searchMapper = (data: any) => {
  let items: Item[] = [];
  items = itemsMapper(data?.results);

  if (items.length > 4) {
    items.length = 4;
  }

  const categories = categoriesMapper(data?.available_filters);

  const result: SearchResponse = {
    author,
    categories,
    items,
  };
  return result;
};

export const productMapper = (productInfo: any, description: string) => {
  const product: ProductResponse = {
    author,
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
      freeShipping: productInfo.shipping.free_shipping,
      soldQuantity: productInfo.sold_quantity,
      description,
    },
  };
  return product;
};
