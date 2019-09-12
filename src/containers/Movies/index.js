import React from 'react';
import { connect } from "react-redux";
import {fetchMoviesList} from './actions';
class Movies extends React.Component{
  componentDidMount(){
    this.props.fetchMoviesList();
  }
  render(){
    const{movies,languages}= this.props;
    console.log("moviesrender",movies);
    console.log("languages",languages);

    return(
      <div>
       Movies App
      </div>
    )
  }
}

function mapStateToProps(state) {
    let movies = state && state.movieList && state.movieList.movies && state.movieList.movies;

    let data =movies.length> 0? movies[0]:[];
    console.log("data",data);
    let languageData =data.length> 0? data[0]:[];
    let movieData=data.length> 1? data[1]:[];
    console.log("moviesData",movieData);

    return {
        languages: languageData,
        movies:movieData
    };
}

export default connect(
 mapStateToProps,
 {
     fetchMoviesList
 }
)(Movies);
