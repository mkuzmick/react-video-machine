import React, {useState} from 'react';
import styles from './Controls.module.css'

export default function (props) {

  const [ isPlaying, setPlaying ] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      console.log("playing, so we're pausing");
      props.player.current.pause()
        .then(()=>{setPlaying(false)})
        .catch((err)=>{console.error(err);});
    } else {
      console.log("paused, so we're playing");
      props.player.current.play()
        .then(()=>{setPlaying(true)})
        .catch((err)=>{console.error(err);});
    }
  }

  // const like = (player) => {
  //   console.log("liked");
  // }

  return (
    <div className={styles.controls}>
      <div className={styles.button} onClick={playPause}>
        {isPlaying ? "pause" : "play"}
      </div>
      <div className={styles.button} onClick={() => props.player.current.pause()}>pause</div>
      <div className={styles.button} onClick={() => props.like(props.player)}>like</div>
      {props.tags.map((tag, index)=>{
        return(
          <div
            key={index}
            className={styles.button}
            onClick={
              ()=>{
                props.tag().then(seconds=>{
                  console.log(`${tag} at ${seconds} seconds.`);
                })
              }
            }
          >
            {tag}
          </div>
        )
      })}
    </div>
  )
}
