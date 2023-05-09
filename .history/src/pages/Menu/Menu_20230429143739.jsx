import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
export default function Menu() {
  return (
    <Container className='barList bg-dark'>
    <Row>
      <Col className='w-50 h-50' sm>
        <img src ="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </Col>
      <Col sm>
        <img src ="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </Col>
      <Col sm>
        <img src ="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품설명</p>
      </Col>
    </Row>
</Container>
  );
}

