import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';
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

    </>
   
  );
}
 
