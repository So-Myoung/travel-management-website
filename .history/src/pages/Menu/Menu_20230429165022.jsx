import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import {NavLink} from "react-router-dom";
export default function Menu() {
   const navigate = useNavigate();
  let [shoes] = useState(data);
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {
            shoes.map(function(a,i){
              return (
                  <Product img ={shoes[i].img} 
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
  console.log(props.img);
  const onClickImg = () => {
    navigate(`/menu/id/등등 내가 원하는 주소`);
  };
  return (
    <Col sm>
            <img src ={props.img} width="30%"/>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
  )
  
}
   
