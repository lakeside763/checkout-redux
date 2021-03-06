import { all, call } from "redux-saga/effects";
import { fetchProductsStart } from "./product/product.sagas";

export default function* rootSaga() {
  yield all([call(fetchProductsStart)]);
}
