import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import './Menu.css';
import { Link } from 'react-router-dom';
import DetailMenus from './DetailMenus';
function Menu() {

  let [items, itemsFunc] = useState(data);
  
  return (

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

  );
}

function Item(props){
  return (
    <div className="col-md-5">
      <Link  to={"/menu/"+ props.item.id}  style={{display:'inline-block'}}>
      <img src={"images/shoes"+ (props.i + 1) +".png"} width="50%" height="" />
      </Link >
      <h3>{ props.item.title }</h3> 
      <h3>{ props.item.content }</h3>
      <p>{ props.item.price } won</p>
    </div>
    
  )
  
}

export default App;