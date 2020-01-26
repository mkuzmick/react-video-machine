import React, { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Player from './marker-machine/Player'

export default (props) => {
  return (
    <div>
        <Jumbotron>
          <Player />
        </Jumbotron>
    </div>
  )
}
