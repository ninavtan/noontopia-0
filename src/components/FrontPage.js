import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";
import "../App.css";
import styled from 'styled-components'

import BannerCarousel from './BannerCarousel';

export default function FrontPage() {
  return (
    <Container fluid>
      <Row>
        <Header>
          <h1>Nina Tan</h1>
          <h2>Software developer based in Durham, NC</h2>
        </Header>
        
      </Row>
      <Row className="front-page-row">
        <Col>
          <LinkColumn>
          <a rel="noreferrer" target="_blank" href="https://digispace.herokuapp.com/">Digi-Space</a>
          <h6>A corner of cyberspace that empowers collaboration and connection.</h6>
          <h7>Technology used: Javascript, React, Redux, MongoDB, Express, socket.io, konva.js </h7>
          <img className="app-image" src="https://drive.google.com/uc?export=view&id=1_o4baSvAY3bpdQ-L7NadijEJIB6b43Wj" alt="screenshot of digispace app"></img>
          </LinkColumn>
          
        </Col>

        <Col>
          <LinkColumn>
            <a target="_blank" href="https://agile-mello.herokuapp.com/">mello</a>
            <h6>A Kanban-style, list-making application.</h6>
            <h7>Technology used: Javascript, React, Redux, MongoDB, Express </h7>
            <img className="app-image" src="https://drive.google.com/uc?export=view&id=1phLiyh05Z_kJaLJbxXYj-xN_5VUWq5Sc" alt="screenshot of digispace app"></img>
          
          </LinkColumn>
        </Col>

      </Row>
      </Container>

  )
}

const Header = styled.div`
  text-align: center;
  font-family: 'Syne', sans-serif;
  font-weight: bold;
  `

const LinkColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-around;
  text-align: center;
  border: 1px solid black;
  padding: 2em;
`

const AppImage = styled.div`
`