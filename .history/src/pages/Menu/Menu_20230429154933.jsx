import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../Menu/data'
import {NavLink} from "react-router-dom";
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
                <NavLink to={`menu/detail}`}>
                  <Product img ={shoes[i].img} 
                  title = {shoes[i].title} content = 
                  {shoes[i].content} price={shoes[i].price}>
                  </Product>
                </NavLink>
              )
            })
            
          }
        </Row>
      </Container>
    </>
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
   
