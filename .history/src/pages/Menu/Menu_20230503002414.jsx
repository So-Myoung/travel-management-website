import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import './Menu.css';
export default function Menu() {
  const [shoes] = useState(data);

  return (
    <Container>
    <Row>
    {
              items.map(function( item, i ){
                return (
                  <Item item={ items[i] } i={i} key={i} />
                )
              })
            }
      </Row>
    </Container>
  );
}

function Item(props){
    return (
        <div className="col-md-5">
            <img src={"images/img"+ (props.i + 1) +".png"} width="100%" height="" />
            <h3>{ props.shoes.title }, { props.item.content }</h3>
            <p>{ props.shoes.price } won</p>
        </div>
    )
}

