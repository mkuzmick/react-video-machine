import React from 'react'
import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'

export default (props) => {
  const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      },
      host: 'https://www.youtube.com',
    };
  const onReady = function(e){
    console.log("ready");
    // console.log("e.target = " + JSON.stringify(e.target));
  }
  const onPause = function(e){
    console.log("paused at " + e.target.getCurrentTime());
    // console.log("e.data = " + JSON.stringify(e.data));
  }
  const onProgress = function(e){
    console.log("progressing . . . " );
  }
  return (
    <div>
      <pre>player goes here</pre>
      <pre>{ JSON.stringify(props) }</pre>
      <ReactPlayer url="https://vimeo.com/384793562" controls={true} onPause={onProgress}  />
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} onPause={onPause} />
    </div>
  )
}
