import { combineReducers } from "redux";

import MoviesReducer from "../containers/Movies/reducer";

export default combineReducers({
   movieList:MoviesReducer
})
