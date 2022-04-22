import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import "../App.css";
import { booksData } from '../data';
const API_KEY = process.env.GOOGLE_API_KEY;


export default function ReadingNow() {
  const [pastbooks, setPastbooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({
    title: '',
    img: '',
  })

  const url = 'https://www.googleapis.com/books/v1/volumes?q=nightbitch&key' + API_KEY


  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(url);
      console.log(response.data.items[0].volumeInfo.imageLinks.thumbnail);
      setCurrentBook({
        img: response.data.items[0].volumeInfo.imageLinks.thumbnail
      });

    }
    fetchData();
    
  }, [])

  return (
    <main id="reading-now-container">
      <Row>
        <h2 id="reading-now-title">What I'm Reading Now . . .</h2>
      </Row>
      
      <Row>
        {/* <Col>
          <img alt="current-book" src={currentBook}></img>
        </Col> */}
        <Col>
        {/* {booksData.map((book, index) => {
          return (
            <div key={index}>
              {book.title}
            </div>
          )
        })} */}
          <i>Nightbitch</i> by Rachel Yoder
          <br />
          <img src={currentBook.img} alt="current-book"></img>
        </Col>
      </Row>
<br />
      <Row>
        <h2 id="reading-now-title">Past reads...</h2>
        <ul>
          <li><i>Unclean Jobs for Women and Girls</i> by Alissa Nutting</li>
        </ul>
      </Row>

      {/* <Row>
        <form>
          <h2>What should I read next?</h2>
          <input type="text" name="name" placeholder="book title" />
          <br />
          <br />

          <input type="text" name="name" placeholder="author" />

        </form>
      </Row> */}
    </main>
  )
}