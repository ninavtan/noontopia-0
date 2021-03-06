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
          <Col xxl={12} className="links-navigation">
            <div className="links">
              <a href="https://github.com/ninavtan" target="_blank" rel="noreferrer"><img alt="github-link" src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a>
              <a href="https://linkedin.com/in/ninatan8" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/></a>
              
            </div>
          
          </Col>
          <Col xxl={{span: 12}} className="navigation">
            <button type="button" className="navigation-links" onClick={handleBackClick}>Back</button>

            <a href="/">
              <img alt="nina" className="logo-nav" src="https://drive.google.com/uc?export=view&id=10_kD2-L8QHdsYRvrOhHReXEn789Zf07v"/>
            </a>
              
            <button type="button" onClick={handleForwardClick} className="navigation-links">
              <i class="bi bi-caret-left"></i>Forward
            </button>
          </Col>
         

      </Row>
     
      </div>
  )
}