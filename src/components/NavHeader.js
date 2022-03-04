import React from "react";
import "../App.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";

export default function NavigationHeader() {

  let navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  function handleForwardClick() {
    navigate(1);
  }

  return (
  <div className="App">
      
        <Row className="App-header">
          <Col className="navigation">
            <button type="button" className="navigation-links" onClick={handleBackClick}>Back</button>
              <img alt="nina" className="logo-nav" src="https://drive.google.com/uc?export=view&id=1692vnCagVIGK-94rS8d0rWfqmmpYf_GO"></img>
              
            <button type="button" onClick = {handleForwardClick} className="navigation-links"><i class="bi bi-caret-left"></i>Forward</button>

          </Col>

      </Row>
     
      </div>
  )
}