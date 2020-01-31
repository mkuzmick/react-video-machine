import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: rgba(50, 20, 70, 0.95);
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export default(props)=>{
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">mk reactLab work</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            {
              props.links.map((link, index) => {
                return(<Nav.Item key={index}><Nav.Link href={link.path}>{link.text}</Nav.Link></Nav.Item>)
              })
            }
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <ul>

        </ul>
      </div>
    </Styles>
  )
}
