import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Menu() {

  let [shoes] = useState(data);

  return (
      <Container>
        <Row>
          {
            shoes.map(function(a,i){
              return (
                  <Product
                  id = {shoes[i].id} 
                  img ={shoes[i].img} 
                  title = {shoes[i].title} content = 
                  {shoes[i].content} price={shoes[i].price}>
                  </Product>
              )
            })       
          }
        </Row>
      </Container>
   
  );
}

function Product(props){
  console.log(props.img);
  return (
    <Col sm>
      <NavLink to={}>
            <img src ={props.img} width="200px"/>
      </NavLink>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
  )
  
}