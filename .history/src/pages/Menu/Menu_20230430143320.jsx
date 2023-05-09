import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';

export default function Menu(props) {
  let [shoes] = useState(data);
    return (
      <div className="col-md-4">
      <Nav.Link href={'menu/'+props.id} style={{display:'inline-block'}}>
      <img src={"menu/"+props.id} width="70%" height="200px"/>
      </Nav.Link>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
      )
}
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

function Product(props){

  return (
    <Col sm>
      <Nav.Link href={'menu/'+props.id} style={{display:'inline-block'}}>
    <img src={process.env.PUBLIC_URL + '/' + 'shoes1' + '.png'} width="70%" height="200px"/>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price}</p>
        </Nav.Link>
    </Col>
  )
  
}
   
