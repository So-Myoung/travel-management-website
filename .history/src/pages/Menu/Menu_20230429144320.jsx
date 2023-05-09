import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
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
                <Product img ={shoes[i].img} title = {shoes[i].title} content = 
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
            <img src ={props.img} width="80%"/>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price}</p>
    </Col>
  )
  
}
    </>
    <Container className='barList bg-dark'>
    <Row>
      <Col sm>
        <img src ="https://codingapple1.github.io/shop/shoes1.jpg" width="30%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </Col>
      <Col sm>
        <img src ="https://codingapple1.github.io/shop/shoes2.jpg" width="30%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </Col>
      <Col sm>
        <img src ="https://codingapple1.github.io/shop/shoes2.jpg" width="30%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </Col>
    </Row>
</Container>
  );
}

