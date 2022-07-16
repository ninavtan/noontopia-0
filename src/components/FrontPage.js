import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import "../App.css";
import styled from 'styled-components'

import ListeningNow from './ListeningNow';

export default function FrontPage() {
  
  return (
    <Container fluid>
      <Row>
        <Header>
          <h1>Nina Tan</h1>
          <h2>Software developer based in Durham, NC</h2>
        </Header>
      </Row>
      <ListeningNow />
    </Container>
  );
}

const Header = styled.div`
  text-align: center;
  font-family: 'Syne', sans-serif;
  font-weight: bold;
  `