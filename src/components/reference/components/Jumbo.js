import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import SmokeImage from '../assets/black-and-white-smoke.jpg'
import styled from 'styled-components'

const Styles = styled.div`
  .jumbotron {
    background: url(${SmokeImage}) no-repeat fixed
  }
  .jumbo {
    color: rgba(50, 20, 70, 0.55);
    margin-top: 40px;
  }
  .overlay {

  }
  .siteTitle {
    font-weight: 900;
    font-size: 8em;
  }
`;

export default () => {
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay">
          <Container>
            <h1 className="siteTitle">reactLab</h1>
          </Container>
        </div>
      </Jumbotron>
    </Styles>
  )
}
