import React, {useEffect, useRef, useState} from 'react'
import Player from '@vimeo/player'
// import './reset.css'
import styles from './VimeoMachine.module.css'
import Controls from './Controls.js'
import Data from './Data.js'


export default (props)=>{
  const container = useRef(document.createElement('div'));
  const player = useRef();
  const [tags, setTags] = useState(["good take", "bad take", "other", "test"])
  const [data, setData] = useState(["no data yet"]);

  useEffect(()=>{
    (async ()=>{
      player.current = await new Player(container.current, {
        id: "260963404",
        width: '624',
        height: '351',
        controls: true
      })
    })()
  }, [])
  return (
    <div className={styles.site}>
      <div className={styles.viewer} >
        <div ref={container} style={{height: '100%'}}>
        </div>
      </div>
      <Controls
        className={styles.controls}
        play={
          () => player.current.play()
          .then(()=>{
            console.log("we played it");
            setData(["we played it", ...data])
          })
          .catch((err)=>{console.log("something went wrong");})
        }
        pause={() => player.current.pause()}
        like={()=>{
          player.current.getCurrentTime()
          .then(seconds=>{console.log(`you liked a moment ${seconds} seconds in.`)})
          .catch(err=>{console.log("hmm. some sort of error occurred. try again.");})
        }}
        tags={tags}
        tag={async () => {
          const time = await player.current.getCurrentTime();
          return time;
        }}
        update={setData}
      />
      <Data data={data} />
    </div>
  )
}
