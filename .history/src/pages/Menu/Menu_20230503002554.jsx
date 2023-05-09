import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import './Menu.css';
export default function Menu() {
  let [items, itemsFunc] = useState(itemList);

  return (
    <Container>
    <Row>
    {
              shoes.map(function( shoes, i ){
                return (
                  <Item shoes={ shoes[i] } i={i} key={i} />
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
            <h3>{ props.shoes.title }, { props.shoes.content }</h3>
            <p>{ props.shoes.price } won</p>
        </div>
    )
}

