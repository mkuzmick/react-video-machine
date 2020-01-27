import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbo from './Jumbo';

const people = [
  {
    name:"Marlon Kuzmick",
    descript:"at work on React right now",
    role: "Director",
    variant:"secondary"
  },
  {
    name:"Katie Gilligan",
    descript:"at work on Airtable right now",
    role: "Project Manager",
    variant:"secondary"
  },
]

export default () => {
  const listItems = people.map((item, index)=>(
    <ListGroup.Item key={index} variant={item.variant}>
      <div className="d-flex w-100 justify-content-between">
        <h5>{item.name}</h5>
        <small>{item.role}</small>
      </div>
      {item.descript}
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
