import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import {Routes, Route, Link } from 'react-router-dom';
export default function Menu() {
  let [shoes] = useState(data);
  return (
    <Routes>
        <Route path="/" element={
          <>
             <div className="main-bg"></div>
            <Container>
              <Row>
                {
                  shoes.map(function(value,i){
                    return (
                      <Product shoes={shoes[i]}>
                      </Product>
                    )
                  })
                }
              </Row>
            </Container>
          </>
        }/>
        <Route path="/detail" element={<div>상세페이지임</div>}/>
</Routes>
  );
}

function Product(props){
  console.log(props.img);
  return (
    <Col sm>
            <img src ={props.img} width="30%"/>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
  )
  
}
   
