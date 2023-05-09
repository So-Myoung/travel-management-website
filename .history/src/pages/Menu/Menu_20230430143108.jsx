import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';
export default function Menu() {

  return (
    <div className="col-md-4">
    <Nav.Link href={'menu/'+props.id} style={{display:'inline-block'}}>
    <img src={"menu/"+props.id} width="70%" height="200px"/>
    </Nav.Link>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
    <p>{props.shoes.price}</p>
  </div>
    )
}
