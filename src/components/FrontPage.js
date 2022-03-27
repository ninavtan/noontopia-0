import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";
import "../App.css";
import styled from 'styled-components'

export default function FrontPage() {
  return (
    <Container fluid>
      <Row className="front-page-row">
        <Col xl={3} xxl={3}>
          <LinkColumn>
            <Link to="/reading-now">What I'm Reading Now</Link>
            <a rel="noreferrer" target="_blank" href="https://calm-basin-65498.herokuapp.com/">Digi-Space</a>
          </LinkColumn>
          
        </Col>
        <Col xl={6} xxl={6}>
          <div className="banner-container">
            <img id="banner-image" alt="new-zealand" src="https://drive.google.com/uc?export=view&id=1rrxT9Ar6josuOssuj0QJIViPRqDn7CXF"></img>
          </div>
        </Col>

        <Col xl={3} xxl={3}>
          <LinkColumn>
            <a target="_blank" href="https://letterboxd.com/ninoqueen/">My Letterboxd</a>
            <Link to="/cool-pix">Cool Pix</Link>
          </LinkColumn>
        </Col>

      </Row>
      </Container>
      
    
  )
}

const LinkColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-around;
  text-align: center;
  // margin-bottom: 2em;
  
  
  
`