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
              shoes.map(function( shoes, i ){
                return (
                  <Product shoes={ shoes[i] } i={i} key={i} />
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
            <img src={"images/img"+ (props.i + 1) +".jpg"} width="100%" height="" />
            <h3>{ props.item.country }, { props.item.city }</h3>
            <p>{ props.item.price } won</p>
        </div>
    )
}

export default Item;