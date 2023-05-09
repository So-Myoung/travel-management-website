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
return (
  <div className="container">
  <div className="row">
    {props.shoes.map((item, index) => {
      return (
        <div className="col-md-4" key={index}>
          <img src={item.id} width="80%" />
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
        </div>
      );
    })}
  </div>
</div>
function Product(props){

  return (
    <Col sm>
      <Nav.Link href={'menu/'+props.id} style={{display:'inline-block'}}>
    <img src={process.env.PUBLIC_URL + '/' + props + '.png'} width="50%" height="100px"/>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price}</p>
        </Nav.Link>
    </Col>
  )
  
}
   
