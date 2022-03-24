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
        <h4 className="headline">Software engineer passionate about inclusive tech.</h4>
        <Col md={2} xl={1} xxl={1}>
          <LinkColumn>
            <Link to="/reading-now">What I'm Reading Now</Link>
            <Link to="/reading-now">Plant Updates</Link>
          </LinkColumn>
          
        </Col>
        {/* <Col xs={12} sm={12} md={10}> */}
        <Col md={2} xxl={10}>
          <div className="banner-container">
            <img id="banner-image" alt="new-zealand" src="https://drive.google.com/uc?export=view&id=1rrxT9Ar6josuOssuj0QJIViPRqDn7CXF"></img>
          </div>
        </Col>

        <Col md={2} xl={1} xxl={1}>
          <LinkColumn>
            <a target="_blank" href="https://letterboxd.com/ninoqueen/">My Letterboxd</a>
            <Link to="/reading-now">Sooo random</Link>
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
  
  
  
`