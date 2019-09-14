 import React from 'react';
 import './List.css';
 import YouTube from "react-youtube";

 class MovieList extends React.Component{

   onClick =() =>{
     alert('hello');
     console.log("working");
   }
   hiddenClick=(youtubeVideoUrl)=>{
    
     console.log('clicked',youtubeVideoUrl )
   }

   _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  render(){
    let data=[];
    const{movies} = this.props;
    const opts = {
      height: "300",
      width: "150",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


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
              <div   key={movie.EventCode}>

              <div  className="movieItem">
                <iframe width="150" height="220" src={youtubeVideoUrl} >
               </iframe> 
                <div onClick={()=>this.hiddenClick(youtubeVideoUrl)} className="overlay">
                  </div>
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
