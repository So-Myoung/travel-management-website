import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import './Menu.css';
export default function Menu() {
  const [shoes] = useState(data);

  return (
    <Container>
    <Row>
          {
            shoes.map(function(a,i){
              return (
                <Product items={ items[i] } i={i} key={i} />
              )
            })
            
          }
      </Row>
    </Container>
  );
}

function Product(props){
  console.log(props.img);
  const navigate = useNavigate();
  return (
    <div className='coffee'>
    <Col sm>
            <img onClick={() => {
              navigate(`/menu/${props.id}`);
            }}  
            className='image' 
            src={"images/"+ (props.i + 1) +".png"} width="100%" height="" />
            <h4 className='orange'>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
    </div>
  )
  
}