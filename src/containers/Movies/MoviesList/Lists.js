 import React from 'react';
 class MovieList extends React.Component{
  render(){
    let data=[];
    const{movies} = this.props;


    return(
      <div>
        {
          movies && movies.map((movie)=>{
            return (
              <div>
              <h1> {movie.EventTitle}</h1>
              </div>
            )
          })

        }
      </div>
    )
  }

 }
 export default MovieList;
