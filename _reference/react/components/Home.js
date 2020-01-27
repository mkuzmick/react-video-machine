import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbo from './Jumbo';

const thingsToDo = [
  {
    title:"test Bootstrap",
    text:"work all the way through this tutorial",
    when: "now",
    variant:"primary"
  },
  {
    title:"test Bootstrap",
    text:"work all the way through this tutorial",
    when: "now",
    variant:"secondary"
  },
]

export default () => {
  const listItems = thingsToDo.map((item, index)=>(
    <ListGroup.Item key={index} variant={item.variant}>
      <div className="d-flex w-100 justify-content-between">
        <h5>{item.title}</h5>
        <small>{item.when}</small>
      </div>
      {item.text}
    </ListGroup.Item>
  ))
  return (
    <div>
      <Jumbo />
      <h2>overview</h2>
      <p>here we'll  basically create a site that documents the creation of the site.</p>
      <p>one can imagine putting this somewhere. and really I should work hard at nailing the netlify or simple aws site workflow. so why not do this?</p>
      <ListGroup>
        {listItems}
        <ListGroup.Item variant="primary">test</ListGroup.Item>
      </ListGroup>
  </div>
  )
}
