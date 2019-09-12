 import React from 'react';
 class MovieList extends React.Component{
  render(){
    let data=[];
    const{movies} = this.props;


    return(
      <div>
        {
          movies && movies.map((movie,index)=>{
            let youTubeUrl = movie.TrailerURL;

             let  i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
             r = youTubeUrl.match(rx);
             let youTubeTrailerId=r[1];
             let youtubeVideoUrl=`https://www.youtube.com/embed/${youTubeTrailerId}`;







            return (
              <div key={movie.EventCode}>
              <h1> {movie.EventTitle}</h1>
               <iframe width="420" height="345" src={youtubeVideoUrl}>
              </iframe>

              </div>
            )
          })

        }
      </div>
    )
  }

 }
 export default MovieList;
