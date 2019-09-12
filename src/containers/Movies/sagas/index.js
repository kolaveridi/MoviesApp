
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_REQUEST_ERROR,
  FETCH_MOVIES_REQUEST_SUCCESS
}  from "../actionTypes";

import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";
import data from '../../../global/data.js';
const url ="https://in.bookmyshow.com/serv/getData";

// const getMoviesList = () =>
//   axios
//     .get(url)
//     .then(
//       resp => (resp ? resp: [])
//     )
//     .catch(err => {
//       throw new Error(err.response.data);
//     });

const getMoviesList= data;

function* fetchMovies(){
  try {
     let moviesList=getMoviesList;

     console.log("moviesList",moviesList);
     yield put ({
       type:FETCH_MOVIES_REQUEST_SUCCESS,
       response:moviesList
     })
  }
  catch(error){
     yield put ({type:FETCH_MOVIES_REQUEST_ERROR, error: error && error.toString()});
  }
}

export function* moviesListWatcher(){

   yield takeLatest(FETCH_MOVIES_REQUEST,fetchMovies);
}
