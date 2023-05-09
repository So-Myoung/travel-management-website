/* eslint-disable */
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import itemList from './data';

function App() {

  let [items, itemsFunc] = useState(itemList);

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
  return (
    <div className="col-md-5">
      <img src={"images/img"+ (props.i + 1) +".jpg"} width="100%" height="" />
      <h3>{ props.item.country }, { props.item.city }</h3>
      <p>{ props.item.price } won</p>
    </div>
  )
}

export default App;