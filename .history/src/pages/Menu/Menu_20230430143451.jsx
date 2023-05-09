import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';

export default function Menu(props) {
  let [shoes] = useState(data);
    return (
      <div className="col-md-4">
      <Nav.Link href={'menu/'+props.shoes} style={{display:'inline-block'}}>
      <img src={"menu/"+shoes.id} width="70%" height="200px"/>
      </Nav.Link>

    </div>
      )
}

  

