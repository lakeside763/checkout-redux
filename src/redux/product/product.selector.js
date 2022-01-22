import { createSelector } from "reselect";
import { processProductDetails } from "./product.utils";

const selectProduct = (state) => state.product;

export const selectProducts = createSelector(
  [selectProduct],
  (product) => product.products
);

export const selectProductList = createSelector([selectProducts], (products) =>
  products ? Object.keys(products).map((key) => products[key]) : []
);

export const selectIsProductsFetching = createSelector(
  [selectProduct],
  (product) => product.isFetching
);

export const selectProductItem = (productUrlParam) =>
  createSelector([selectProducts], (products) =>
    products ? processProductDetails(products, productUrlParam) : null
  );

