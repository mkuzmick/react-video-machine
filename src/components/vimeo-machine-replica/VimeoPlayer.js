import React, {useEffect, useRef} from 'react'
import Player from '@vimeo/player'
import './vimeo-markers.css'

export default (props)=>{
  const container = useRef(document.createElement('div'));
  const player = useRef();

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
    <div className="site">
      <div className="main-content" >
        <div id="player" ref={container} style={{height: '100%'}}>
        </div>
        <button onClick={() => player.current.play()}>play</button>
        <button onClick={() => player.current.pause()}>pause</button>
      </div>
    </div>
  )
}
