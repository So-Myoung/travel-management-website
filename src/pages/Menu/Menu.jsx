import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import './Menu.css';

export default function Menu() {
  let [coffee] = useState(data);

  return (
    <Container>
    <Row>
          {
            coffee.map(function(a,i){
              return (
                <Product className='coffee' img ={coffee[i].img} title = {coffee[i].title} content = {coffee[i].content} price={coffee[i].price}>
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
            <img className='image' src ={props.img} width="200px" height="100px" style={{paddingTop: '30px'}}/>
            <h4 className='orange'>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
    </div>
  )
  
}
