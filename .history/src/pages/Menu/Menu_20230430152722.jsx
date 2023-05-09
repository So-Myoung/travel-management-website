import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Menu() {
  let [shoes] = useState(data);
  <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container className = "barList">
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          {
            shoes.map(function(a,i){
              return (
                <Product img ={shoes[i].img} title = {shoes[i].title} content = {shoes[i].content} price={shoes[i].price}>
                </Product>
              )
            })
            
          }
        </Row>
      </Container>

    </div>
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
   
