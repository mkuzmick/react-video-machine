import React, {useEffect, useRef, useState} from 'react'
import Player from '@vimeo/player'
import styles from './VimeoMachine.module.css'
import Controls from './Controls.js'
import TagInput from './TagInput'
import EventLog from './EventLog.js'

export default (props)=>{
  const container = useRef(document.createElement('div'));
  const player = useRef();
  const [tags, setTags] = useState(["good take", "bad take", "other", "test"]);
  const [events, setEvents] = useState(["no events yet"]);

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
        player={ player }
        className={styles.controls}
        tags={tags}
        tag={async () => {
          const time = await player.current.getCurrentTime();
          return time;
        }}
        setEvents={setEvents}
        events={events}
      />
    <TagInput />
      <EventLog events={events} setEvents={setEvents} />
    </div>
  )
}
