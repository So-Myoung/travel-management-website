import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import {useState} from 'react';
import data from '../Menu/data'
import Nav from 'react-bootstrap/Nav';



export default function Menu() {
  let [Player, setPlayer] = useState(data);
  Player.map(function(a,i) {
    return (
      <List Player={Player[i]} i={i}/>
      )
    })
}

  

const List = (props) => {
  let [Player, setPlayer] = useState(data);
  return (
  <div className="col-md-4">
  <Nav.Link href={'shoes/'+props.i} style={{display:'inline-block'}}>
  <img src={process.env.PUBLIC_URL + '/' + props.i + '.png'} width="70%" height="200px"/>
  </Nav.Link>
  <h4>{props.Player.name}</h4>
  <p>{props.Player.age}</p>
  <p>{props.Player.position}</p>
</div>
  )
}