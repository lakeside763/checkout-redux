import { call, put, takeEvery } from 'redux-saga/effects';
import { getProducts } from '../../api/products.api';
import { fetchProductsFailure, fetchProductsSuccess } from './product.actions';

import ProductActionTypes from './product.types';

export function* fetchProductsAsync() {
  try {
    const productsMap = yield call(getProducts);
    yield put(fetchProductsSuccess(productsMap));
  } catch (error) {
    yield put(fetchProductsFailure(error.message))
  }
}


export function* fetchProductsStart() {
  yield takeEvery(ProductActionTypes.FETCH_PRODUCTS_START, fetchProductsAsync);
}
