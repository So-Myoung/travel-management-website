import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Menu() {
  let [shoes] = useState(data);
  return (
    <>
      <div className="main-bg"></div>
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

    </>
   
  );
}

function Product(props){

  return (
    <Col sm>
      <NavLink to={`menu/`props.id`}>
          <img src ={props.img} width="30%"/>
      </NavLink>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price}</p>
    </Col>
  )
  
}
   
