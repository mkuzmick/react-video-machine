import React from 'react'
import Container from 'react-bootstrap/Container'


export default (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
