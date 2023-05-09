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

  

