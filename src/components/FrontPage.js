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
      <Row className="front-page-row">
        <Col xl={3} xxl={3}>
          <LinkColumn>
          <a rel="noreferrer" target="_blank" href="https://digispace.herokuapp.com/">Digi-Space</a>
            {/* <Link to="/reading-now">What I'm Reading Now</Link> */}
          </LinkColumn>
          
        </Col>
        <Col xl={6} xxl={6}>
          <BannerCarousel/>
        </Col>

        <Col xl={3} xxl={3}>
          <LinkColumn>
            <a target="_blank" href="https://letterboxd.com/ninoqueen/">My Letterboxd</a>
            {/* <Link to="/cool-pix">Cool Pix</Link> */}
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