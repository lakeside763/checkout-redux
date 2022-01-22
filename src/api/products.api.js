import { api_base_url } from "../config";

export const getProducts = async () => {
  try {
    const products = await fetch(`${api_base_url}/product`);
    return mapProductsToObjectList(await products.json());
  } catch (error) {
    return error.message;
  }
};

const mapProductsToObjectList = async (products) => {
  return products.reduce((accumulator, product) => {
    accumulator[product.id] = product;
    return accumulator;
  }, {});
};
