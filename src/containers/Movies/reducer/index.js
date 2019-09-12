import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_REQUEST_ERROR,
  FETCH_MOVIES_REQUEST_SUCCESS
} from "../actionTypes";

const INITIAL_STATE={
    movies:[],
    fetchMoviesError:"",
    isFetchingMovies:false
};

export const function MoviesReducer(state=INITIAL_STATE,action={}){
  switch (action.type) {
     case :FETCH_MOVIES_REQUEST:{
       return{
         ...state,
         isFetchingMovies:true
       }
     }
     case :FETCH_MOVIES_REQUEST_ERROR:{
       return{
         ...state,
         isFetchingMovies:false
       };
     }
     case :FETCH_MOVIES_REQUEST_SUCCESS:{
       return{
         ...state,
         isFetchingMovies:false,
         movies:[action.response,...state.movies]
       }
     }
      default:
      return state;


  }
}
