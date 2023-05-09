import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import {useState} from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';



export default function Menu() {
  let [Shoes, setShoes] = useState(data);
  <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
            <h4>{shoes[0].title}</h4>
            <p>
              {shoes[0].content} & {shoes[0].price}
            </p>
          </div>
          </>
}

  

