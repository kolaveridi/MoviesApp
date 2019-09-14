import React from 'react';
import './List.css';
import YouTube from "react-youtube";

class MovieList extends React.Component {

  state = {
    videoClicked: false,
    videoUrl: null
  }
  onClick = () => {
    alert('hello');
    console.log("working");
  }
  hiddenClick = (youtubeVideoUrl) => {
    this.setState({
      videoClicked: true,
      videoUrl: youtubeVideoUrl

    })

    console.log('clicked', youtubeVideoUrl)
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  changeState = () => {
    this.setState({videoClicked:true,videoUrl:null});
  }


  render() {
    const { videoClicked, videoUrl } = this.state;
    let autoPlayVideoUrl= videoUrl+"?autoplay=1";
    console.log("autoPlayVideoUrl",autoPlayVideoUrl);
    let data = [];
    const { movies } = this.props;


    return (
      <div className="moviesRoot">

         {
                   videoClicked ?
                    <div className="play">
                       <iframe play width="200px" height="200px" src={autoPlayVideoUrl} >
                   </iframe>
                   </div>
                   :null

            } 
         
        {
          movies && movies.map((movie, index) => {
            let youTubeUrl = movie.TrailerURL;

            let i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
            r = youTubeUrl.match(rx);
            let youTubeTrailerId = r[1];
            let youtubeVideoUrl = `https://www.youtube.com/embed/${youTubeTrailerId}`;

            return (
              <div key={movie.EventCode}>

                <div className="movieItem">
                  {
                    
                      <div>
                        <iframe width="150" height="220" src={youtubeVideoUrl}>
                        </iframe>
                        <div onClick={() => this.hiddenClick(youtubeVideoUrl)} className="overlay">
                        </div>
                      </div>
                  }
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
