import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'

export default function Menu() {
  let [shoes] = useState(data);
  const navigate = useNavigate()
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
  return (
    <Col sm>
            <img src ={props.img} width="30%"/>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
  )
  
}
   
