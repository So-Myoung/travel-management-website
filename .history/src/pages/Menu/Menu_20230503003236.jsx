import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import './Menu.css';
export default function Menu() {
  let [items, itemsFunc] = useState(data);

  return (
    <Container>
    <Row>
    {
              items.map(function( items, i ){
                return (
                  <Item items={ items[i] } i={i} key={i} />
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
            <img src={"images/shoes"+ (props.i + 1) +".png"} width="30%" height="" />
            <h3>{ props.items?.title }
             { props.items?.content }</h3>
            <p>{ props.items?.price } won</p>
        </div>
    )
}

