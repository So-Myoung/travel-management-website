import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Menu() {
  
  let [shoes] = useState(data);
  return (
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
                  <Product
                  id = {shoes[i].id} 
                  img ={shoes[i].img} 
                  title = {shoes[i].title} content = 
                  {shoes[i].content} price={shoes[i].price}>
                  </Product>
              )
            })       
          }
        </Row>
      </Container>
   
  );
}

   
