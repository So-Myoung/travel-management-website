import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import './Menu.css';

function App() {

  let [items, itemsFunc] = useState(data);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {
            items.map(function( item, i ){
              return (
                <Item item={ items[i] } i={i} key={i} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Item(props){
  const navigate = useNavigate();
  return (
    <div className="col-md-5">
      <img  onClick={() => {
        navigate(`/menu/${props.id}`);
      }}  src={"images/shoes"+ (props.i + 1) +".png"} width="50%" height="" />
      <h3>{ props.item.title }</h3> 
      <h3>{ props.item.content }</h3>
      <p>{ props.item.price } won</p>
    </div>
  )
}

export default App;