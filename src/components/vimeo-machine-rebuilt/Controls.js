import React, {useState} from 'react';
import styles from './Controls.module.css'

export default function (props) {

  const [ isPlaying, setPlaying ] = useState(false);

  const playPause = async () => {
    if (isPlaying) {
      console.log("currently playing, so we're pausing");
      props.player.current.pause()
        .then(()=>{setPlaying(false)})
        .then(()=>{
          props.player.current.getCurrentTime()
            .then((ts)=>{
              props.setEvents(
                [
                  ...props.events,
                  {
                    tag: "pause",
                    ts: ts
                  }
                ]
              )
            })
        })
        .catch((err)=>{console.error(err);});
    } else {
      console.log("currently paused, so we're playing");
      props.player.current.play()
        .then(()=>{setPlaying(true)})
        .then(()=>{
          props.player.current.getCurrentTime()
            .then((ts)=>{
              props.setEvents(
                [
                  ...props.events,
                  {
                    tag: "play",
                    ts: ts
                  }
                ]
              )
            })
        })
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

      {props.tags.map((tag, index)=>{
        return(
          <div
            key={index}
            className={styles.button}
            onClick={
              ()=>{
                props.tag().then(seconds=>{
                  console.log(`${tag} at ${seconds} seconds.`);
                  props.setEvents([...props.events, {tag: tag, ts: seconds}])
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
