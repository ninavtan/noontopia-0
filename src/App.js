import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import FrontPage from './components/FrontPage';
import NavigationHeader from './components/NavHeader';
import ReadingNow from './components/ReadingNow';
import Container from 'react-bootstrap/Container';
import Gallery from './components/Gallery';

function App() {
  const [count, setCount] = useState(0);

  return (
  <Container>
    <NavigationHeader />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/reading-now" element={<ReadingNow /> } />
        <Route path="/cool-pix" element={<Gallery /> } />

      </Routes>
  </Container>
  
  );
}

export default App;
