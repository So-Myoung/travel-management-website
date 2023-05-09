import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
export default function Menu(props) {
  let {shoes} = useParams();
  return (
    <>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={process.env.PUBLIC_URL + `/${shoes}.png`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.shoes[id].name}</h4>
      <p>{props.shoes[id].age}</p>
      <p>{props.shoes[id].position}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
    </>
   
  );
}

function Product(props)
{
  return (
    <Col sm>
      <Nav.Link href={'menu/'+props.id} style={{display:'inline-block'}}>
      <img src={process.env.PUBLIC_URL + '/' + props.i + '.png'} width="70%" height="200px"/>
      </Nav.Link>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price}</p>
    </Col>
  )
  
}
   
