 import React from 'react';
 import './List.css';
 class MovieList extends React.Component{
  render(){
    let data=[];
    const{movies} = this.props;


    return(
      <div className="moviesRoot">
        {
          movies && movies.map((movie,index)=>{
            let youTubeUrl = movie.TrailerURL;

             let  i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
             r = youTubeUrl.match(rx);
             let youTubeTrailerId=r[1];
             let youtubeVideoUrl=`https://www.youtube.com/embed/${youTubeTrailerId}`;
            return (
              <div  key={movie.EventCode}>
              <h1 className="header"> {movie.EventTitle}</h1>
              <div>
               <iframe width="420" height="345" src={youtubeVideoUrl}>
              </iframe>
              </div>

              </div>
            )
          })

        }
      </div>
    )
  }

 }
 export default MovieList;
