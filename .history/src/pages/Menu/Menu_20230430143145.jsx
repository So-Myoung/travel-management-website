import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';
export default function Menu(props) {

  return (
    <div className="col-md-4">

    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
    <p>{props.shoes.price}</p>
  </div>
    )
}
