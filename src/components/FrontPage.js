import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";
import "../App.css";
import styled from 'styled-components'

export default function FrontPage() {
  return (
      <Row className="front-page-row">
        <Col xs={2} md={2}>
        <LinkColumn>
          <Link to="/reading-now">What I'm Reading Now</Link>
          <Link to="/reading-now">Plant Updates</Link>
        </LinkColumn>
          
        </Col>
        <Col xs={4} md={8}>
          <div className="banner-container">
          <img id="banner-image" alt="new-zealand" src="https://drive.google.com/uc?export=view&id=1rrxT9Ar6josuOssuj0QJIViPRqDn7CXF"></img>
          </div>
        </Col>
        <Col xs={2} md={2}>
        <LinkColumn>
          <a target="_blank" href="https://letterboxd.com/ninoqueen/">My Letterboxd</a>
          <a target="_blank" href="https://letterboxd.com/ninoqueen/">Seasonal Plans</a>
          </LinkColumn>
        </Col>

      </Row>
      
    
  )
}

const LinkColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-around;
  
  
  
`