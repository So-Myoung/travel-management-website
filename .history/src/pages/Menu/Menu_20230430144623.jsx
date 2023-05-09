import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react-router-dom';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';

export default function Menu(props) {
  return (
    <div className="col-md-4">
    <Nav.Link href={'menu/'+props.i} style={{display:'inline-block'}}>
      <img src={props.player.image} width="70%" height="200px"/>
      </Nav.Link>
      <h4>{props.player.name}</h4>
      <p>{props.player.age}</p>
      <p>{props.player.position}</p>
  </div>
    )
}

  

