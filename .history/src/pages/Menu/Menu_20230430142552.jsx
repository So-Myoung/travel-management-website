import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';
export default function Menu() {
  let [shoes] = useState(data);
  return (
    <div className="container">
    <div className="row">
      {props.shoes.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            <img src={item.id} width="80%" />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  </div>
   
  );
}
 
