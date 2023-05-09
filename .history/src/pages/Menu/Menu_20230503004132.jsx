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
                <Product className='coffee'
                id = {shoes[i].id} 
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
  const navigate = useNavigate();
  return (
    <div className='coffee'>
    <Col sm>
            <img onClick={() => {
              navigate(`/menu/${props.id}`);
            }}  
            className='image' 
            src ={"../images/"} width="200px" height="100px" style={{paddingTop: '30px'}}/>
            <h4 className='orange'>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
    </div>
  )
  
}