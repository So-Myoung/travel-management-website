import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  console.log(props.img);
  return (
    <>
    <li 
          onClick={() => {
        navigate(`/menu/${p}`);
      }}
      >
          <img src ={props.img} width="30%"/>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price}</p>
    </li>
    </>
  );
  
}
   
