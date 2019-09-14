import React from 'react';
import { connect } from "react-redux";
import {fetchMoviesList} from './actions';
import MoviesList from './MoviesList/Lists';
import './Movies.css';
class Movies extends React.Component{
  componentDidMount(){
    this.props.fetchMoviesList();
  }
  render(){

    const{movies,languages}= this.props;
    console.log("moviesrender",movies);
    console.log("languages",languages);

    return(
      <div className="root">
        <MoviesList movies={movies}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
    let movies = state && state.movieList && state.movieList.movies && state.movieList.movies;

    let data =movies.length> 0? movies[0]:[];

    let languageData =data.length> 0? data[0]:[];
    let movieData=data.length> 1? data[1]:[];
    let objectToArray=[];
    Object.keys(movieData).forEach(function(key,index) {
      console.log("index",index);
      if(index<50)
      objectToArray=[...objectToArray,movieData[key]];
    });
    return {
        languages: languageData,
        movies:objectToArray
    };
}

export default connect(
 mapStateToProps,
 {
     fetchMoviesList
 }
)(Movies);
