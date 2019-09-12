import { all } from "redux-saga/effects";
import {
  moviesListWatcher
} from "../containers/Movies/sagas";
export default function* rootSaga() {

    yield all([
        moviesListWatcher()
    ]);
}
