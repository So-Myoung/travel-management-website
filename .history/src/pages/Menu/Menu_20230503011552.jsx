import React from 'react';
import  {Container,Row,Col}  from 'react-bootstrap';
import { useState } from 'react';
import data from '../Menu/data'
import { Route, useNavigate } from 'react-router-dom';
import './Menu.css';
import {NavLink} from "react-router-dom";
import DetailMenus from './DetailMenus';
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
  <Route path="/menu/:id" element={<DetailMenus item={props.item}/>}/>
  return (
    <div className="col-md-5">
      <NavLink to={"/menu/"+ props.i}  style={{display:'inline-block'}}>
      <img src={`${process.env.PUBLIC_URL`` + (props.i + 1) +".png"} width="50%" height="" />
      </NavLink>
      <h3>{ props.item.title }</h3> 
      <h3>{ props.item.content }</h3>
      <p>{ props.item.price } won</p>
    </div>
    
  )
  
}

export default App;