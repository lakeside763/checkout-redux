import ProductActionTypes from "./product.types";

export const fetchProductsStart = () => ({
  type: ProductActionTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (productsMap) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: productsMap
});

export const fetchProductsFailure = (errorMessage) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage
})
