import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import {useState} from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';



export default function Menu() {
  let [Shoes, setShoes] = useState(data);
  Shoes.map(function(a,i) {
    return (
      <List Shoes={Shoes[i]} i={i}/>
      )
    })
}

  

const List = (props) => {
  return (
  <div className="col-md-4">
  <Nav.Link href={'menu/'+props.i} style={{display:'inline-block'}}>
  <img src={process.env.PUBLIC_URL + '/' + props.i + '.png'} width="70%" height="200px"/>
  </Nav.Link>
  <h4>{props.Shoes.name}</h4>
  <p>{props.Shoes.age}</p>
  <p>{props.Shoes.position}</p>
</div>
  )
}