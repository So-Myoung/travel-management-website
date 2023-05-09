import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import data from './data.js';
export default function Menu() {
  let [shoes] = useState(data);
  
  return (
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

