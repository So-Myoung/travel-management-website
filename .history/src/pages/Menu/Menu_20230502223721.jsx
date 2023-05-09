import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Menu.css';
export default function Menu() {
  let [shoes] = useState(data);

  return (
    <Container>
    <Row>
          {
            shoes.map(function(a,i){
              return (
                <Product className='coffee' 
                img ={shoes[i].img} 
                title = {shoes[i].title} 
                content = {shoes[i].content} 
                price={shoes[i].price}>
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
    <div className='coffee'>
    <Col sm>
            <img onClick={() => {
      navigate(`/menu/${props.id}`);
    }}  
            className='image' src ={props.img} width="200px" height="100px" style={{paddingTop: '30px'}}/>
            <h4 className='orange'>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
    </div>
  )
  
}